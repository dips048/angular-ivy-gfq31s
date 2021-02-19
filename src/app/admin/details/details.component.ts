import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product = new Product(-1,'No Product');

  constructor(private ps: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ps.getProduct(this.route.snapshot.params.id).subscribe((product: Product) =>{
      this.product = product;
    })
  }
}
