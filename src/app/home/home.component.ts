import { Component } from '@angular/core';
import { MessengerService } from '../cart/Messenger.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
      constructor(private messengerservice:MessengerService,private cartservice:CartService){}
      
      ngOnInit(){
           this.messengerservice.getMessage()
              .subscribe((product:any) => {
                this.cartservice.AddCart({
                  name : product.name,
                  id : product.id,
                  price : product.price,
                  imageurl:product.imageurl,
                  quantity:1
                })
            })
          }    
   }
