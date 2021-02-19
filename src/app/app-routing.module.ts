import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApiResolverService } from "./api-resolver.service";
import { AuthGuard } from "./auth/auth.guard";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  { path: "products", component: ProductListComponent },
  {
    path: "product/:id",
    component: ProductDetailComponent,
    resolve: { products: ApiResolverService }
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  { path: "", redirectTo: "products", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
