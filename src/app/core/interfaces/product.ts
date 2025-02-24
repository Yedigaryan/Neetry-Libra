interface Image {
  title: string;
  description: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: Image;
  description: string;
  ean: string;
  upc: string;
  net_price: number;
  taxes: number;
  categories: number[];
  tags: string[];
}

export interface ProductsResponse {
  status: string;
  code: number;
  total: number;
  locale: string;
  data: Product[];
  page: number;
  limit: number;
}
