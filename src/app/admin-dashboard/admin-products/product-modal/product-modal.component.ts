import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/CategoryService';
import { ProductService } from 'src/app/shared/ProductService';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
       categories: any[] = [];
       Image: string = '';
       imagePreview: string | ArrayBuffer | null = null; 
       isLoading:boolean = false;

       constructor(private categoryService:CategoryService,private productService:ProductService){}

       onFileSelected(event: any): void {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.imagePreview = reader.result as string;
          };
          reader.readAsDataURL(file);
        } else {
          this.imagePreview = null;
        }
      }

      removeModal(){
        let addProduct = document.getElementById('defaultModal')
        addProduct?.classList.add("hidden");
     }

       ngOnInit(): void {
          this.categoryService.getCategories()
            .subscribe((category) => {
               this.categories = category;
          })
       }   

       save(formData:any):void{
           this.isLoading = true;
           let data = {
              name : formData.Name,
              Category_id : parseInt(formData.Category),
              price : formData.Price,
              availability : formData.Availablility,
              description : "helloworld"
           }
          
           this.productService.saveProduct(data)
              .subscribe((res) => {

                 this.isLoading = false;
                 this.removeModal();
              },(error) => {
                 console.log(error)
                 this.removeModal();
                 this.isLoading = false;
              })
              window.location.reload();
       }
}
