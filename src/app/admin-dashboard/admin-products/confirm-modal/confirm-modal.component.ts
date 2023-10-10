import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/shared/ProductService';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {
    @Input() inputData: any;

    constructor(private productService:ProductService){}

    
    onDelete(id:number){
          this.productService.deleteProduct(id)
           .subscribe((res) => {
               console.log(res);
           },error => {
              console.log(error)
           })

           window.location.reload();

           this.onCancel();
    }
    

    onCancel() {
       let a = document.getElementById("delete")
       a?.classList.add("hidden");
    }
    
}
