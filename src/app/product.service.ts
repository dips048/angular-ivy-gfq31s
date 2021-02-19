import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  url: string = "https://fakestoreapi.com/products";

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get(this.url);
  }

  getProduct(productId) {
    return this.httpClient.get(`${this.url}/${productId}`);
  }
}
