import Redis from "ioredis";

export interface Cache {
  set<T>(key: string, value: T, ttl: number): Promise<void>;
  get<T>(key: string): Promise<T>;
  del(key: string): Promise<void>;
}

export class RedisCache implements Cache {
  constructor(private readonly redis: Redis) {}

  async set<T extends object>(key: string, value: T, ttl: number): Promise<void> {
    if (typeof value === "object") {
      return await this.redis.set(key, JSON.stringify(value), "EX", ttl);
    }
    return await this.redis.set(key, value, "EX", ttl);
  }

  async get<T extends object>(key: string): Promise<T> {
    const cachedValue = await this.redis.get(key);
    return cachedValue ? JSON.parse(cachedValue) : null;
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
