import { Component } from '@angular/core';
import { ProductService } from '../shared/ProductService';
import { CategoryService } from '../shared/CategoryService';
import { CartService } from '../cart/cart.service';
import { MessengerService } from '../cart/Messenger.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products:any[]=[];
    categories:any[]=[]
    selectedField:number = 0;

    constructor(private productService:ProductService,private categoryService:CategoryService,private MessengerService:MessengerService){}

    onProductAdd(id:number){
      const product = 
         this.products.filter(product => product.id === id);
         this.MessengerService.sendMessage(product[0]);
      }

    ngOnInit(){
       this.productService.getProduct()
         .subscribe(res => {
             this.products = res;
         })

         this.categoryService.getCategories()
         .subscribe(res => {
             this.categories= res;
         })
    }

   



    onProductChange(id:string){
      this.selectedField = parseInt(id);
        if(+id === 0){
          this.productService.getProduct()
          .subscribe(res => {
              this.products = res;
          })
        }
        this.categoryService
          .getProductByCategoryId(parseInt(id))
             .subscribe(res => {
                this.products = res.productList
             })
       }
}
