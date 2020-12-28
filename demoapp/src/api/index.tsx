import { fetch } from './fetch';

enum CacheState {
  Fetching,
  Done,
  Invalid,
};
class LocalCache {
  static Lifetime = 1300;

  state: CacheState = CacheState.Fetching;
  createdAt: number = 0;
  promise: Promise<any> = Promise.resolve();

  static create(promise: Promise<any>) {
    const cache = new LocalCache();
    cache.createdAt = Date.now();
    cache.promise = promise;
    return cache;
  }

  isExpired() {
    return Date.now() - this.createdAt > LocalCache.Lifetime;
  }
};

class Api { 
  private cache: Record<string, LocalCache> = {};
  
  constructor(private endpoint: string) {

  }

  async get(path: string) {
    const cache = this.tryGetLocalCache(path);
    if (cache) return cache;

    const promise = this._get(path);
    this.addCache(path, promise);

    return promise;
  }
  async _get(path: string) {
    try {
      const resp = await fetch(`${this.endpoint}${path}`);
      const json = await resp.json();

      if (resp.status > 400)
        throw new Error(json);

      return json;
    } catch(e) {
      console.error(e);
      this.invalidateCache(path);

      throw e;
    }
  }

  private addCache(path: string, data: any) {
    this.cache[path] = LocalCache.create(data);
  }
  invalidateCache(path: string) {
    delete this.cache[path];
  }
  private isCached(path: string) {
    const slot = this.cache[path];
    if (!slot) return false;
    return !slot.isExpired();
  }
  private tryGetLocalCache(path: string) {
    if (!this.isCached(path))
      return null;
    
    console.log(`cache hit: ${path}`);

    const slot = this.cache[path];
    return slot.promise;
  }
};
export const api = new Api('');
