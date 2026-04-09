import { Redis } from '@upstash/redis';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const appPassword = process.env.MESOMO_PASSWORD;
  if (!appPassword) {
    return res.status(500).json({ error: 'MESOMO_PASSWORD environment variable is not set on the server.' });
  }

  const { password } = req.body;
  if (!password || password !== appPassword) {
    return res.status(401).json({ error: 'Incorrect password.' });
  }

  // Generate a session token
  const token = crypto.randomBytes(32).toString('hex');

  try {
    const redis = new Redis({
      url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    // Store session token with 7-day TTL
    await redis.set(`session:${token}`, 'valid', { ex: 604800 });

    res.status(200).json({ token });
  } catch (err) {
    console.error('Error creating session:', err);
    res.status(500).json({ error: 'Failed to create session.' });
  }
}
