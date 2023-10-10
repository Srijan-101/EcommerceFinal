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
        this.categoryService.saveCategory(value)
           .subscribe(res => {
            console.log(res);
           },error => {
              console.log(error)
           })
           window.location.reload();
    }
   
}
