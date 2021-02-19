import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ApiResolverService implements Resolve<any> {

  constructor(private ps: ProductService) { }

  resolve(route:ActivatedRouteSnapshot){
    console.log("resolver activated");
    return this.ps.getProduct(route.params.id);
  }
}
