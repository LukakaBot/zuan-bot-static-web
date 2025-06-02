export interface ResponseData<D> {
  code: number;
  message: string;
  data: D;
}