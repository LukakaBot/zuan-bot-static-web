import Bucket from "@/plugin/bucket/core/Bucket"

declare global {
  interface Window {
    $bucket?: Bucket;
  }
}