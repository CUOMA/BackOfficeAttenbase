export interface Request<T> {
  code: number;
  data: T;
  success: boolean;
}
