import { CSP_NONCE, Component, OnInit } from '@angular/core';
import { MessengerService } from './Messenger.service';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { colorSpace } from '@cloudinary/url-gen/actions/delivery';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   myCart:any[] = [];

   constructor(private MessengerService:MessengerService,private cartService:CartService,private route:Router) {}
      
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


      increase(orderId:number) {
        this.myCart = this.myCart.map(product => {
          if (product.id === orderId) {
            this.totalPrice = this.totalPrice + product.price;
            return { ...product, quantity: product.quantity + 1 ,total: (product.quantity + 1) * product.price};
          }
          return product;
        });
      }

      decrease(orderId:number) {
        this.myCart = this.myCart.map(product => {
          if (product.id === orderId) {
            this.totalPrice = this.totalPrice -  product.price;
            return { ...product, quantity: product.quantity - 1 ,total: (product.quantity - 1 ) * product.price};
          }
          return product;
        });
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
        if(localStorage.getItem("currentUser")){
            let a = document.getElementById("cart-confirm");
            a?.classList.remove("hidden");
        }else {
            localStorage.setItem('get-back','true');
            this.route.navigate(['/login']);
        }
    }
}
