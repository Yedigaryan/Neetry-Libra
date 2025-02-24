export interface IResponse {
  status: string;
  code: number;
  locale: string;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  error?: any;
}
