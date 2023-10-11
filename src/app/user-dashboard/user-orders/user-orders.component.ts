import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { OrderService } from 'src/app/shared/OrderService';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent {
  Orders:any[]=[];

  constructor(private orderService:OrderService,private authService :AuthService){}

  calculateTotalPrice(order:any): number {
    let totalPrice = 0;
    for (const product of order.productList) {
      totalPrice += product.quantity * product.price;
    }
    return totalPrice;
}

  ngOnInit(){

      this.orderService.getOrderbyId(this.authService.currentUserValue.Id)
         .subscribe((res) => {
             this.Orders = res.data;
         })
  }
}
