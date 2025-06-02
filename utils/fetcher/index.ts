import Fetcher from './core/Fetcher';

const baseURL = process.env.NEXT_PUBLIC_SERVICE_PORT
  ? `${process.env.NEXT_PUBLIC_SERVICE_URL}:${process.env.NEXT_PUBLIC_SERVICE_PORT}${process.env.NEXT_PUBLIC_SERVICE_PREFIX}`
  : `${process.env.NEXT_PUBLIC_SERVICE_URL}${process.env.NEXT_PUBLIC_SERVICE_PREFIX}`;

const fetcher = new Fetcher({
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  baseURL,
  next: {
    revalidate: 10,
  }
})

export default fetcher;