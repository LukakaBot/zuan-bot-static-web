declare namespace NodeJS {
  interface ProcessEnv {
    /** 服务地址 */
    readonly NEXT_PUBLIC_SERVICE_URL: string;
    /** 服务端口 */
    readonly NEXT_PUBLIC_SERVICE_PORT: string;
    /** 服务前缀 */
    readonly NEXT_PUBLIC_SERVICE_PREFIX: string;
    /** 存储类型 */
    readonly NEXT_PUBLIC_STORAGE_TYPE: 'localStorage' | 'sessionStorage';
    /** web socket 地址 */
    readonly NEXT_PUBLIC_SOCKET_URL: string;
    /** 项目根路径 */
    readonly NEXT_PUBLIC_BASE_PATH: string;
  }
}
