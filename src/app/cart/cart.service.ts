
import { Subject } from "rxjs";
import { MessengerService } from "./Messenger.service";
import { Injectable } from "@angular/core";
import { colorSpace } from "@cloudinary/url-gen/actions/delivery";

interface cartProduct {
    id : number
    name : string,
    quantity : number,
    price : number,
    imageurl:string
}

@Injectable()
export class CartService {

    Totalproduct:number=0;
    ProductList:cartProduct[]=[];

    TotalProductSubject = new Subject();


    getTotalProduct(){
       return this.TotalProductSubject.asObservable();
    }

    updateProduct(){
       this.Totalproduct = this.Totalproduct - 1;
       this.TotalProductSubject.next(this.Totalproduct);
    }
    
    
    AddCart(product:any){
        const existingProduct = 
          this.ProductList.find((p) => p.id === product.id);
        if (existingProduct) {
           existingProduct.quantity += 1;
        } else {
          this.ProductList.push(product);
        }
        this.Totalproduct = this.ProductList.length;
        this.TotalProductSubject.next(this.Totalproduct);
    } 

    getCart(){
      console.log(this.ProductList);
          return this.ProductList;  
    }
}