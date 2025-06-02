import type { FetcherRequestConfig } from '../types';
import InterceptorManager from './InterceptorManager';

class Fetcher {
  private instanceConfig: FetcherRequestConfig;
  private interceptor = new InterceptorManager();
  private baseURL: string;
  create = (instanceConfig: FetcherRequestConfig) => new Fetcher(instanceConfig);

  constructor(instanceConfig: FetcherRequestConfig) {
    this.instanceConfig = instanceConfig;
    this.baseURL = instanceConfig.baseURL || '';
  }

  async request<T = any, D = any>(config: FetcherRequestConfig<D>): Promise<T> {
    const { url, method, data } = config;

    const request = this.interceptor.request({
      url: this.baseURL + url,
      method,
      data,
    });

    const response = await fetch(request.url, request.options);
    return this.interceptor.response(response);
  }

  get = <T = any, D = any>(url: string, data?: D): Promise<T> => this.request({ url, method: 'GET', data });

  post = <T = any, D = any>(url: string, data?: D): Promise<T> => this.request({ url, method: 'POST', data });

  put = <T = any, D = any>(url: string, data?: D): Promise<T> => this.request({ url, method: 'PUT', data });

  delete = <T = any, D = any>(url: string, data?: D): Promise<T> => this.request({ url, method: 'DELETE', data });

  patch = <T = any, D = any>(url: string, data?: D): Promise<T> => this.request({ url, method: 'PATCH', data });
}

export default Fetcher;
