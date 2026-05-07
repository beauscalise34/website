import { schedule } from '@netlify/functions'
import axios from 'axios'

// Every Monday at 9am CST (15:00 UTC)
export const handler = schedule('0 15 * * 1', async () => {
  try {
    const baseUrl = process.env.URL || 'http://localhost:8888'
    const res = await axios.post(`${baseUrl}/.netlify/functions/write-blog`)
    console.log('Scheduled blog result:', res.data)
    return { statusCode: 200 }
  } catch (err) {
    console.error('Scheduled blog error:', err.message)
    return { statusCode: 500 }
  }
})
