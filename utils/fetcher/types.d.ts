export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH';

export interface FetcherRequestConfig<D = any> {
  url?: string;
  method?: Method;
  baseURL?: string;
  headers?: Headers;
  data?: D;
  cacheTIme?: number;
  next?: {
    revalidate: number;
  };
  cache?: 'no-store' | 'force-cache';
};

export interface CreateFetcherDefaults<D = any> extends Omit<FetcherRequestConfig<D>, 'headers'> {
  headers?: Headers;
}

export interface FetcherRequestInit {
  url: string;
  options: RequestInit;
}

type CommonRequestHeadersList = 'Accept' | 'Content-Length' | 'User-Agent' | 'Content-Encoding' | 'Authorization';

export type FetcherHeaderValue = string | string[] | number | boolean | null;

type ContentType = FetcherHeaderValue | 'text/html' | 'text/plain' | 'multipart/form-data' | 'application/json' | 'application/x-www-form-urlencoded' | 'application/octet-stream';

interface RawFetcherHeaders {
  [key: string]: FetcherHeaderValue;
}

export type FetcherRequestHeaders = Partial<RawFetcherHeaders & {
  [Key in CommonRequestHeadersList]: FetcherHeaderValue;
} & {
  'Content-Type': ContentType
}>;

export type Headers = RequestInit['headers'] & FetcherRequestHeaders;

export interface ResponseData<D> {
  code: number;
  message: string;
  data: D;
}