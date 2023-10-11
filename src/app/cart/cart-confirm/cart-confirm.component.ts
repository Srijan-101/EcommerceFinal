import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { OrderService } from 'src/app/shared/OrderService';

@Component({
  selector: 'app-cart-confirm',
  templateUrl: './cart-confirm.component.html',
  styleUrls: ['./cart-confirm.component.css']
})
export class CartConfirmComponent {
    @Input() finalProduct:any;
    @Input() GrandTotal:any;
    @ViewChild('f') data!:ElementRef;

    errorMessage:string='';
    error:boolean=true;

    constructor(private Authservice:AuthService,private orderService:OrderService){

    }

    onClose(){
        let a = document.getElementById("cart-confirm");
        a?.classList.add("hidden");
    }

    onConfirm(value:any){
        const productList = this.finalProduct.map((item:any) => {
              return {
                  productId : item.id,
                  quantity : item.quantity
              }
        })

        let data = {
           userId :  this.Authservice.currentUserValue.Id,
           location : value.location,
           phoneNumber : value.phone,
           productList
        }
         
        this.orderService.PlaceOrder(data)
          .subscribe((res) => {
             console.log(res);
             this.onClose();
             window.location.reload();
          },error => {
             this.errorMessage=error.error.data[0];
             this.error=true;
             console.log(error);
          })
    }

    ngOnInit(){
      
    }
}
