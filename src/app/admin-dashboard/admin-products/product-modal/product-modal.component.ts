import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { colorSpace } from '@cloudinary/url-gen/actions/delivery';
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

       @ViewChild('file') fileEvent:any;
       
       file:any;

       private formData = new FormData();

       errorMessage:string='';
       error:boolean=false;

       constructor(private categoryService:CategoryService,private productService:ProductService,private http:HttpClient){}

       onFileSelected(event: any): void {
        this.file = event.target.files[0];
        if (this.file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.imagePreview = reader.result as string;
          };
          reader.readAsDataURL(this.file);
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

           const a  = new FormData();
           a.append("file",this.fileEvent.nativeElement.files[0])
           a.append("upload_preset","SrijanDemo");
           a.append("cloud_name", "dj481z3ic");
          
  
           this.http.post("https://api.cloudinary.com/v1_1/dj481z3ic/image/upload",a)
              .subscribe((res:any) => {

                let data = {
                  name : formData.Name,
                  Category_id : parseInt(formData.Category),
                  price : formData.Price,
                  availability : formData.Availablility,
                  description : "helloworld",
                  Imageurl:res.url
               }
              
               this.productService.saveProduct(data)
                  .subscribe((res) => {
                     this.isLoading = false;
                     console.log(res);
                      this.removeModal();
                      window.location.reload();
                  },(error) => {
                      this.errorMessage=error.error.data[0];
                      this.error=true;
                      this.isLoading = false;
                  })
                 
              },error => {
                 console.log(error)
                 this.errorMessage="Server error!!";
                 this.error=true;
                 this.isLoading = false;
          })
       }
}