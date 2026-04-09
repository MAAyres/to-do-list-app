import { Redis } from '@upstash/redis';

export async function validateSession(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.substring(7);
  
  try {
    const redis = new Redis({
      url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    const session = await redis.get(`session:${token}`);
    return session === 'valid';
  } catch (err) {
    console.error('Session validation error:', err);
    return false;
  }
}
