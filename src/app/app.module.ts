import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SideBarComponent } from './admin-dashboard/side-bar/side-bar.component';
import { AdminProductsComponent } from './admin-dashboard/admin-products/admin-products.component';
import { ProductModalComponent } from './admin-dashboard/admin-products/product-modal/product-modal.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './Routes/app.routing.module';
import { RouterModule } from '@angular/router';
import { AdminCategoryComponent } from './admin-dashboard/admin-category/admin-category.component';
import { CategoryService } from './shared/CategoryService';
import { AuthInterceptor } from './shared/AuthInterceptor';
import { ProductService } from './shared/ProductService';
import { ConfirmModalComponent } from './admin-dashboard/admin-products/confirm-modal/confirm-modal.component';
import { ConfirmCategoryComponent } from './admin-dashboard/admin-category/confirm-category/confirm-category.component';
import { AuthGuardHome } from './Routes/Route.Home.guard';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { MessengerService } from './cart/Messenger.service';
import { CartConfirmComponent } from './cart/cart-confirm/cart-confirm.component';
import { OrderService } from './shared/OrderService';
import { AdminOrderComponent } from './admin-dashboard/admin-order/admin-order.component';
import { EditModalComponent } from './admin-dashboard/admin-products/edit-modal/edit-modal.component';
import { SidebarComponent } from './user-dashboard/sidebar/sidebar.component';
import { UserOrdersComponent } from './user-dashboard/user-orders/user-orders.component';
import { ChangeStatusComponent } from './admin-dashboard/admin-order/change-status/change-status.component';
import { MessageComponent } from './shared/message/message.component';
import { RegisterComponent } from './auth/register/register.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageComponent,
    HomeComponent,
    ProductsComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    SideBarComponent,
    AdminProductsComponent,
    ProductModalComponent,
    AuthComponent,
    LoginComponent,
    AdminCategoryComponent,
    ConfirmModalComponent,
    ConfirmCategoryComponent,
    CartComponent,
    CartConfirmComponent,
    AdminOrderComponent,
    EditModalComponent,
    UserDashboardComponent,
    SidebarComponent,
    UserOrdersComponent,
    ChangeStatusComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    MessengerService,
    ProductService,
    CategoryService,
    CartService,
    OrderService,
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
