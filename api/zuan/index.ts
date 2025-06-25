import fetcher from "@/utils/fetcher";

/** 随机获取一条祖安语录 */
export function fetchZuanQuote(level: string): Promise<string> {
  return fetcher.get("/quote", { level });
}
