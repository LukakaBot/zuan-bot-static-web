import Bucket from './core/Bucket';

export default function setupBucket() {
  const storageType = process.env.NEXT_PUBLIC_STORAGE_TYPE;
  window.$bucket = new Bucket(storageType);
}
