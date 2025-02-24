import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsResponse } from '../interfaces/product';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly productsUrl = 'https://fakerapi.it/api/v2/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number = 1, limit: number = 10, sort: 'asc' | 'desc' | 'none' = 'none'): Observable<ProductsResponse> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', limit.toString());

    if (sort !== 'none') {
      params = params.set('sort', `name:${sort}`);
    }

    return this.http.get<ProductsResponse>(this.productsUrl, { params });
  }
}
