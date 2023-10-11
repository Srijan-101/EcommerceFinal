import { Component } from '@angular/core';
import { CategoryService } from 'src/app/shared/CategoryService';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {
    categories: any[] | undefined;
    confirmData!:{name:String,id:number};
    error:boolean=false;
    errorMessage:string="";
   
    onDeleteConfirm(Data:{name:string,id:number}){
      this.confirmData = Data;
      let a = document.getElementById("delete-category");
      a?.classList.remove("hidden");
   }

    constructor(private categoryService:CategoryService){ }

    ngOnInit(){
      this.categoryService.getCategories().subscribe((data: any) => {
        this.categories = data;
      });
    }

  

    onSave(value:{type:string}){
        if(value.type){
          this.categoryService.saveCategory(value)
          .subscribe(res => {
           console.log(res);
           window.location.reload();
          },error => {
            this.errorMessage=error.error.errormessage;
            this.error=true;
          })
          
   } else {this.errorMessage="Invalid category!!";this.error=true}
   
 }
}
