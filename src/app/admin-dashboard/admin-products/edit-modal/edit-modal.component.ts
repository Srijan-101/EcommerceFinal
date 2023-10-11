import { Component, Input, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/shared/CategoryService';
import { ProductService } from 'src/app/shared/ProductService';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  categories: any[] = [];
  Image: string = '';
  imagePreview: string | ArrayBuffer | null = null; 
  isLoading:boolean = false;

  @Input() inputData: any;

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

 removeEditModal(){
   let addProduct = document.getElementById('EditModal')
   addProduct?.classList.add("hidden");
}

  ngOnInit(): void {
     this.categoryService.getCategories()
       .subscribe((category) => {
          this.categories = category;
     })
  }   

  save(formData:any):void{
     let Name:any = document.getElementById('Name');
     let Price:any = document.getElementById('Price');
     let Category:any = document.getElementById('Category');
     let Availability:any = document.getElementById('Availability');
    
     this.isLoading = true;
           let data = {
              id:this.inputData.id,
              name : Name.value,
              Category_id : parseInt(Category.value),
              price : Price.value,
              availability : Availability.value,
              description : "helloworld"
           }
          
           this.productService.updateProduct(data)
              .subscribe((res) => {
                 this.isLoading = false;
                 console.log(res);
              },(error) => {
                 console.log(error)
                 this.isLoading = false;
              })
              window.location.reload();
  }
}
