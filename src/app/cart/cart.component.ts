import { CSP_NONCE, Component, OnInit } from '@angular/core';
import { MessengerService } from './Messenger.service';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   myCart:any[] = [];

   constructor(private MessengerService:MessengerService,private cartService:CartService) {}
      
      totalProduct:number=0;
      totalPrice:number=0

      ngOnInit() {
           this.myCart = this.cartService.getCart();
           this.myCart.forEach(item => {
               item.total = item.price * item.quantity;
               this.totalPrice = this.totalPrice + item.total;
           })
          this.totalProduct = this.cartService.getCart().length;
      }

      onRemove(id:number){
        this.cartService.updateProduct();
        this.totalProduct = this.totalProduct - 1;
        this.myCart= this.myCart.filter(item => item.id !== id);
        this.totalPrice = 0;
        this.myCart.forEach(item => {
            this.totalPrice = this.totalPrice + item.total;
        })
      }

      onConfirm(){
        let a = document.getElementById("cart-confirm");
        a?.classList.remove("hidden");
    }
}
