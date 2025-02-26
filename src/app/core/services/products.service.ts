// Angular core imports
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// RxJS imports
import { Observable } from 'rxjs';

// Application interfaces
import { IProductsResponse } from '../interfaces/IProduct';
import { IBookResponse } from '@core/interfaces/IBook';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly productsUrl: string = 'https://fakerapi.it/api/v2/products';
  private readonly booksUrl: string = 'https://fakerapi.it/api/v2/books';


  constructor(private http: HttpClient) {}

  getProducts(page: number = 1, limit: number = 10, sort: 'asc' | 'desc' | 'none' = 'none'): Observable<IProductsResponse> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    if (sort !== 'none') {
      params = params.set('sort', `name:${sort}`);
    }

    return this.http.get<IProductsResponse>(this.productsUrl, { params });
  }

  getBooks(page: number = 1, limit: number = 10, sort: 'asc' | 'desc' | 'none' = 'none'): Observable<IBookResponse> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());
    if (sort !== 'none') {
      params = params.set('sort', `title:${sort}`);
    }
    return this.http.get<IBookResponse>(this.booksUrl, { params });
  }
}
