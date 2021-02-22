import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product(-1, "No Product", 0);

  constructor(private ps: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.ps
      .getProduct(this.route.snapshot.params.id)
      .subscribe((product: Product) => {
        this.product = product;
      });
  }
}
