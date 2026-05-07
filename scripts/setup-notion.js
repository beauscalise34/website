// One-time setup: configures the Blog Queue database and populates 10 starter keywords.
// Usage: node scripts/setup-notion.js

import { Client } from '@notionhq/client'

try {
  const dotenv = await import('dotenv')
  dotenv.config()
} catch {}

if (!process.env.NOTION_TOKEN || !process.env.NOTION_BLOG_DB_ID) {
  console.error('Missing NOTION_TOKEN or NOTION_BLOG_DB_ID in .env')
  process.exit(1)
}

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const dbId = process.env.NOTION_BLOG_DB_ID

const STARTER_KEYWORDS = [
  'garage floor epoxy Houston',
  'epoxy flooring cost Houston TX',
  'metallic epoxy garage floor Houston',
  'polyaspartic floor coating Houston',
  'commercial epoxy flooring Houston',
  'garage floor coating Katy TX',
  'epoxy patio coating Houston',
  'how long does epoxy flooring last',
  'epoxy vs polyurea floor coating',
  'best garage floor coating for Houston humidity',
]

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

async function setup() {
  console.log(`Configuring database: ${dbId}`)

  // Rename existing "Name" title property to "Keyword" + add all other properties
  await notion.databases.update({
    database_id: dbId,
    properties: {
      Name: { name: 'Keyword', title: {} },   // rename default title field
      Status: {
        select: {
          options: [
            { name: 'Queue',     color: 'blue'   },
            { name: 'Writing',   color: 'yellow' },
            { name: 'Published', color: 'green'  },
            { name: 'Failed',    color: 'red'    },
          ],
        },
      },
      Slug:               { rich_text: {} },
      'Meta Title':       { rich_text: {} },
      'Meta Description': { rich_text: {} },
      'HTML Content':     { rich_text: {} },
      'Published Date':   { date: {} },
      'Word Count':       { number: { format: 'number' } },
    },
  })
  console.log('✅ Properties configured')

  console.log('Adding 10 starter keywords...')
  for (const keyword of STARTER_KEYWORDS) {
    await notion.pages.create({
      parent: { database_id: dbId },
      properties: {
        Keyword: { title: [{ text: { content: keyword } }] },
        Status:  { select: { name: 'Queue' } },
        Slug:    { rich_text: [{ text: { content: slugify(keyword) } }] },
      },
    })
    console.log(`  + ${keyword}`)
  }

  console.log('\n✅ All done! Your Blog Queue is ready in Notion.')
}

setup().catch((err) => {
  console.error('Setup failed:', err.message)
  process.exit(1)
})
