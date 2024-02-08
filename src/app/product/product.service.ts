import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { TProductResponse } from './models/product.model';

@Injectable()
export class ProductService {
  #http = inject(HttpClient)

  getProducts() {
    return this.#http.get<TProductResponse>("https://dummyjson.com/products")
  }
}
