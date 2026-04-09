import { Redis } from '@upstash/redis';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  if (!process.env.KV_REST_API_URL && !process.env.UPSTASH_REDIS_REST_URL) {
    return res.status(500).json({ error: 'Environment variables for Upstash Redis are completely missing. Ensure your Vercel Project is linked to the Storage!' });
  }

  try {
    const redis = new Redis({
      url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    const data = await redis.get('engineer-companies');
    res.status(200).json({ companies: data });
  } catch (err) {
    console.error('Error fetching tasks from Redis:', err);
    res.status(500).json({ error: 'Failed to fetch from Upstash database. ' + err.message });
  }
}
