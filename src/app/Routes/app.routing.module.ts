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
import { AuthGuardHome } from "./Route.Home.guard";
import { CartComponent } from "../cart/cart.component";
import { ProductsComponent } from "../products/products.component";


const AppRoutes: Routes = [
    {path: '', canActivate: [AuthGuardHome],component: HomeComponent , children : [
         {path:'',component:ProductsComponent},
         {path:'Cart',component:CartComponent},
    ]}, 

    {path: 'login',canActivate:[AuthGuardLogin],component:LoginComponent},
    {path:'admin-dashboard',canActivate:[AuthGuard],component: AdminDashboardComponent, children : [
          {path:'',component:AdminProductsComponent},
          {path:'category',component:AdminCategoryComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}