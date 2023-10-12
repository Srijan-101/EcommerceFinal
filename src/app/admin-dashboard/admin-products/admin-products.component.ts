import { Component, ElementRef, ViewChild } from '@angular/core';
import { colorSpace } from '@cloudinary/url-gen/actions/delivery';
import { ProductService } from 'src/app/shared/ProductService';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products:any;
  searchProducts:any;
  confirmData!:{name:string,id:number};

  EditData:any;
  Productid!:number;



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

  addEditModal(Data:any){
    this.EditData = Data;
    let addProduct = document.getElementById('EditModal')
    addProduct?.classList.remove("hidden");
 }

 searchProductsByName(searchTerm:any) {
  searchTerm = searchTerm.toLowerCase(); 
   const products = this.products.filter((product:any) => {
     return product.name.toLowerCase().includes(searchTerm);
  });

  return products;
}


onSearch(searchTerm:any){
    this.searchProducts = this.searchProductsByName(searchTerm);
    console.log(this.searchProducts);
}



  addProduct(){
     let addProduct = document.getElementById('defaultModal')
     addProduct?.classList.remove("hidden");
  }
}
