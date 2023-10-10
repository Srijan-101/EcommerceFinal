import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent {
    @Input() finalProduct:any;
    @Input() GrandTotal:any;
    @ViewChild('f') data!:ElementRef;

    constructor(private Authservice:AuthService){

    }

    onClose(){
        let a = document.getElementById("cart-confirm");
        a?.classList.add("hidden");
    }

    onConfirm(value:any){
        const productList = this.finalProduct.map((item:any) => {
              return {
                  id : item.id,
                  qty : item.quantity
              }
        })

        let data = {
           userId :  this.Authservice.currentUserValue.Id,
           location : value.location,
           phoneNo : value.phone,
           productList
        }
    }

    ngOnInit(){
      console.log(this.finalProduct);
    }
}
