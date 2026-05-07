// Runs at build time: fetches published posts from Notion → src/data/posts.json
import { Client } from '@notionhq/client'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

if (!process.env.NOTION_TOKEN) {
  try {
    const dotenv = await import('dotenv')
    dotenv.config()
  } catch {}
}

const outDir = join(__dirname, '../src/data')
mkdirSync(outDir, { recursive: true })

async function fetchPosts() {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_BLOG_DB_ID) {
    console.warn('Notion env vars not set — writing empty posts.json')
    writeFileSync(join(outDir, 'posts.json'), '[]')
    return
  }

  const notion = new Client({ auth: process.env.NOTION_TOKEN })

  console.log('Fetching published posts from Notion...')

  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DB_ID,
    filter: { property: 'Status', select: { equals: 'Published' } },
    sorts: [{ property: 'Published Date', direction: 'descending' }],
  })

  const posts = await Promise.all(
    results.map(async (page) => {
      const props = page.properties

      // Full HTML is stored in page body blocks
      const blocksRes = await notion.blocks.children.list({ block_id: page.id })
      const html = blocksRes.results
        .filter((b) => b.type === 'paragraph')
        .map((b) => b.paragraph.rich_text.map((rt) => rt.plain_text).join(''))
        .join('')

      const firstPMatch = html.match(/<p[^>]*>(.*?)<\/p>/is)
      const excerpt = firstPMatch
        ? firstPMatch[1].replace(/<[^>]*>/g, '').slice(0, 200) + '...'
        : props['Meta Description']?.rich_text[0]?.plain_text || ''

      return {
        id: page.id,
        keyword: props.Keyword.title[0]?.plain_text || '',
        slug: props.Slug.rich_text[0]?.plain_text || '',
        metaTitle: props['Meta Title'].rich_text[0]?.plain_text || '',
        metaDescription: props['Meta Description'].rich_text[0]?.plain_text || '',
        excerpt,
        wordCount: props['Word Count'].number || 0,
        publishedDate: props['Published Date'].date?.start || '',
        html,
      }
    })
  )

  writeFileSync(join(outDir, 'posts.json'), JSON.stringify(posts, null, 2))
  console.log(`✅ Saved ${posts.length} post(s) to src/data/posts.json`)
}

fetchPosts().catch((err) => {
  console.error('fetch-posts failed:', err.message)
  writeFileSync(join(outDir, 'posts.json'), '[]')
})
