import Redis from "ioredis";

export interface Cache {
  set(key: string, value: unknown, ttl: number): Promise<void>;
  get(key: string): Promise<unknown>;
  del(key: string): Promise<void>;
}

export class RedisCache implements Cache {
  constructor(private readonly redis: Redis) {}

  async set<T>(key: string, value: T, ttl: number): Promise<void> {
    await this.redis.set(key, JSON.stringify(value), "EX", ttl);
  }

  async get<T>(key: string): Promise<T> {
    const cachedValue = await this.redis.get(key);
    return cachedValue ? JSON.parse(cachedValue) : null;
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
