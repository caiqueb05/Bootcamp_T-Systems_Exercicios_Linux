import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}${id}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}${id}`);
  }
}