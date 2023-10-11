import { Component } from '@angular/core';
import { OrderService } from 'src/app/shared/OrderService';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent {
      Orders:any[]=[];
      id!:number;

      constructor(private orderService:OrderService){}

      ngOnInit(){
           this.orderService.getAll()
            .subscribe((res) => {
               console.log(res);
               this.Orders = res;
            })
      }

      onUpdate(id:any){
            let a = document.getElementById("updateStatus")
            a?.classList.remove("hidden");
            this.id = id;
      }
}
