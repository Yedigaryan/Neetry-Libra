import { IResponse } from '@core/interfaces/IResponse';

export interface IBook {
  id: number;
  title: string,
  author: string,
  genre: string,
  description: string,
  isbn: string,
  image: string,
  published: string,
  publisher: string,
}

export interface IBookResponse extends IResponse {
  data: IBook[];
}
