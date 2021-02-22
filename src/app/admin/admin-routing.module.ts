import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { AdminComponent } from "./admin/admin.component";
import { DetailsComponent } from "./details/details.component";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        canActivateChild: [AuthGuard],
        children: [
          { path: "list", component: ListComponent },
          { path: "details/:id", component: DetailsComponent },
          { path: "", component: DashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
