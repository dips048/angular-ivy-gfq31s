import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

import { AuthModule } from "./auth/auth.module";
import { Router } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductDetailComponent],
  imports: [BrowserModule, HttpClientModule, AuthModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
