import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/ProductService';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products:any;
  confirmData!:{name:string,id:number};

  constructor(private productService:ProductService){}

  ngOnInit(){
      this.productService.getProduct()
      .subscribe(res => {
          this.products = res;
      },error => {
         console.log(error);
      })
  }

  onDeleteConfirm(Data:{name:string,id:number}){
      this.confirmData = Data;
      let a = document.getElementById("delete");
      a?.classList.remove("hidden");
  }


  addProduct(){
     let addProduct = document.getElementById('defaultModal')
     addProduct?.classList.remove("hidden");
  }
}
