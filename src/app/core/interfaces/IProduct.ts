interface iImage {
  title: string;
  description: string;
  url: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  images: iImage;
  description: string;
  ean: string;
  upc: string;
  net_price: number;
  taxes: number;
  categories: number[];
  tags: string[];
}

export interface IProductsResponse {
  status: string;
  code: number;
  total: number;
  locale: string;
  data: IProduct[];
  page: number;
  limit: number;
}
