import { Client } from '@notionhq/client'
import Anthropic from '@anthropic-ai/sdk'
import axios from 'axios'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function splitIntoChunks(str, size) {
  const chunks = []
  for (let i = 0; i < str.length; i += size) chunks.push(str.slice(i, i + size))
  return chunks
}

export const handler = async () => {
  try {
    // 1. Find next queued post
    const { results } = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DB_ID,
      filter: { property: 'Status', select: { equals: 'Queue' } },
      sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
      page_size: 1,
    })

    if (!results.length) {
      return { statusCode: 200, body: JSON.stringify({ message: 'No posts in queue' }) }
    }

    const page = results[0]
    const keyword = page.properties.Keyword.title[0]?.plain_text || ''
    const existingSlug = page.properties.Slug.rich_text[0]?.plain_text
    const slug = existingSlug || slugify(keyword)
    const pageId = page.id

    // 2. Mark as Writing
    await notion.pages.update({
      page_id: pageId,
      properties: { Status: { select: { name: 'Writing' } } },
    })

    // 3. Generate post with Claude
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: `Write a 1,200–1,500 word SEO blog post for Apex Epoxy & Surface Systems, a professional epoxy flooring company serving Houston, TX and surrounding areas.

Target keyword: "${keyword}"

Business details:
- Company: Apex Epoxy & Surface Systems
- Location: Cypress/Houston, TX and surrounding areas (Katy, The Woodlands, Sugar Land, Pearland, etc.)
- Services: garage floor coatings, metallic epoxy, polyaspartic coatings, commercial floors, patio coatings, decorative concrete
- Differentiators: owners on every job, 10-year warranty, free estimates
- Phone: 281-433-4346
- Website: apexepoxytx.com

Voice: Professional and confident. Speaks to quality-conscious Houston homeowners aged 30–55. Authoritative, no fluff. Builds trust through expertise.

Required structure (use exact HTML tags):
1. <h1> — compelling, keyword-rich title
2. <p> — strong intro (2–3 sentences) that hooks the reader and includes the keyword naturally
3. 3–4 <h2> sections with 2–3 paragraphs each of genuinely useful, detailed content
4. <h2>Frequently Asked Questions</h2> — 3 Q&A pairs using <h3> for each question
5. <h2>Ready to Transform Your Floors?</h2> — CTA section mentioning free estimates, phone 281-433-4346, and apexepoxytx.com

Rules:
- Output clean HTML only — no markdown, no code fences, no commentary before or after
- Do NOT include <html>, <head>, <body>, or <!DOCTYPE> tags
- Use semantic tags: <h1>, <h2>, <h3>, <p>, <ul>, <li>
- Include the keyword naturally 4–6 times throughout
- Include Houston / Texas local references for local SEO
- End every CTA with: <a href="https://apexepoxytx.com">apexepoxytx.com</a> or <a href="tel:2814334346">281-433-4346</a>`,
      }],
    })

    const htmlContent = message.content[0].text.trim()
    const wordCount = htmlContent.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length

    const h1Match = htmlContent.match(/<h1[^>]*>(.*?)<\/h1>/is)
    const rawTitle = h1Match ? h1Match[1].replace(/<[^>]*>/g, '') : keyword
    const metaTitle = rawTitle.slice(0, 60)
    const metaDescription = `Expert ${keyword} in Houston, TX. Apex Epoxy & Surface Systems delivers flawless results with a 10-year warranty. Free estimates — call 281-433-4346.`.slice(0, 160)

    // Extract first paragraph for excerpt
    const firstPMatch = htmlContent.match(/<p[^>]*>(.*?)<\/p>/is)
    const excerpt = firstPMatch
      ? firstPMatch[1].replace(/<[^>]*>/g, '').slice(0, 200)
      : metaDescription

    // 4. Update Notion properties
    await notion.pages.update({
      page_id: pageId,
      properties: {
        Status: { select: { name: 'Published' } },
        Slug: { rich_text: [{ text: { content: slug } }] },
        'Meta Title': { rich_text: [{ text: { content: metaTitle } }] },
        'Meta Description': { rich_text: [{ text: { content: metaDescription } }] },
        'HTML Content': { rich_text: [{ text: { content: htmlContent.slice(0, 1990) } }] },
        'Word Count': { number: wordCount },
        'Published Date': { date: { start: new Date().toISOString().split('T')[0] } },
      },
    })

    // 5. Store full HTML in page body blocks (Notion property limit is 2000 chars)
    const chunks = splitIntoChunks(htmlContent, 1990)
    await notion.blocks.children.append({
      block_id: pageId,
      children: chunks.map(chunk => ({
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: chunk } }] },
      })),
    })

    // 6. Trigger Netlify rebuild so new post goes live
    if (process.env.NETLIFY_BUILD_HOOK) {
      await axios.post(process.env.NETLIFY_BUILD_HOOK)
    }

    // 7. Slack notification (optional)
    if (process.env.SLACK_WEBHOOK_URL) {
      await axios.post(process.env.SLACK_WEBHOOK_URL, {
        text: `✅ New blog post published!\n*${rawTitle}*\nKeyword: ${keyword}\nWords: ${wordCount}\nURL: https://apexepoxytx.com/blog/${slug}`,
      })
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, keyword, slug, wordCount }),
    }
  } catch (err) {
    console.error('write-blog error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) }
  }
}
