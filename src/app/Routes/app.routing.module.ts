import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../auth/login/login.component";
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { HeaderComponent } from "../header/header.component";
import { AdminProductsComponent } from "../admin-dashboard/admin-products/admin-products.component";
import { HomeComponent } from "../home/home.component";
import { AdminCategoryComponent } from "../admin-dashboard/admin-category/admin-category.component";
import { AuthGuard } from "./Routes.guard";
import { AuthGuardLogin } from "./Routes.Login.guard";

const AppRoutes: Routes = [
    {path: 'login',canActivate:[AuthGuardLogin],component:LoginComponent},
    {path:'admin-dashboard',canActivate:[AuthGuard],component: AdminDashboardComponent, children : [
          {path:'',component:AdminProductsComponent},
          {path:'category',component:AdminCategoryComponent}
    ]},
    { path: '', component: HomeComponent}, 
];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}