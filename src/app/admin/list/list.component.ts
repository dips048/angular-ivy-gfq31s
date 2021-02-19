import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../product";
import { ProductService } from "../../product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(private ps: ProductService, private router: Router) {}

  ngOnInit() {
    this.ps.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log(products);
    });
  }

  public getProduct(url, id) {
    this.router.navigate([url, id]).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
