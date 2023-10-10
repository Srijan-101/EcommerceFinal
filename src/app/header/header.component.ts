import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../cart/cart.service';
import { Subscription } from 'rxjs';
import { MessengerService } from '../cart/Messenger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
   private subscription !: Subscription;

   loggedIn = false;
   name:string=''
   totalProduct:number=0;
   
   constructor(private authService:AuthService,private cartService:CartService,private msg:MessengerService){}
   ngOnInit(){


      this.subscription = this.cartService.getTotalProduct()
         .subscribe((total:any) => {
              this.totalProduct = total;
      })
                  
      if(this.authService.currentUserValue.Role === 'CUSTOMER'){
         this.loggedIn = true;
         this.name = this.authService.currentUserValue.FirstName
      }
   }

   onLogOut(){
      this.authService.logout();
      window.location.reload();
   }

   ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
