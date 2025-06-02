import queryString from 'query-string';
import type { FetcherRequestConfig, FetcherRequestInit, Headers, ResponseData } from "../types";

class InterceptorManager {
  constructor() { }

  request = <T = any>({ url, method, data, cacheTIme }: FetcherRequestConfig<T>): FetcherRequestInit => {
    let params = '';
    let payload = '';
    let config: RequestInit = {};
    let _url = url;

    const headers: Headers = {
      'Authorization': 'Bearer ',
    };

    if (cacheTIme || cacheTIme === 0) {
      if (cacheTIme > 0) {
        config = { next: { revalidate: cacheTIme } }
      }
      else {
        config = { cache: 'no-store' };
      }
    }
    else {
      config = { cache: 'force-cache' };
    }

    if (method === 'GET' || method === 'DELETE') {
      if (data) {
        params = queryString.stringify(data!);
        _url = `${_url}?${params}`;
      }
    } else {
      if (!['[object FormData]', '[object URLSearchParams]'].includes(Object.prototype.toString.call(data))) {
        Object.assign(headers, { 'Content-Type': 'application/json' });
        payload = JSON.stringify(data);
      }
    }

    return {
      url: _url!,
      options: {
        method,
        headers,
        body: method !== 'GET' && method !== 'DELETE' ? payload : undefined,
        ...config
      }
    };
  }

  response = <D>(response: Response): Promise<D> => {
    return new Promise((resolve, reject) => {
      const URL = response.url;

      const res = response.json() as Promise<ResponseData<D>>;

      if (response.status === 200) {
        res.then((data) => {
          return resolve(data.data);
        })
      } else {
        response.clone().text().then((text) => {
          try {
            const error = JSON.parse(text);
            return reject({ message: error.message || 'API Error', url: URL });
          } catch {
            return reject({ message: text, url: URL });
          }
        });
      }
    })
  }
}

export default InterceptorManager;