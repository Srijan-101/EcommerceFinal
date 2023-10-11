import { Component, Input, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/shared/OrderService';

@Component({
  selector: 'app-change-status',
  templateUrl: './change-status.component.html',
  styleUrls: ['./change-status.component.css']
})
export class ChangeStatusComponent {
   @Input() id!:number;
   @ViewChild('value') value:any;

   constructor(private orderService:OrderService){}

   onCancel() {
    let a = document.getElementById("updateStatus")
    a?.classList.add("hidden");
   }

   onUpdate(){
       this.orderService.
          UpdateOrder({
              order_id : this.id,
              status : this.value.nativeElement.value
          }).subscribe(res => {
              window.location.reload();
          }) 
     }
}
