import fetcher from "@/utils/fetcher";

export function fetchZuanList(level: string): Promise<string> {
  return fetcher.get("/quote", { level });
}
