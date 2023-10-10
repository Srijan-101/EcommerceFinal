import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/CategoryService';

@Component({
  selector: 'app-confirm-category',
  templateUrl: './confirm-category.component.html',
  styleUrls: ['./confirm-category.component.css']
})
export class ConfirmCategoryComponent {
  @Input() inputData: any;

  constructor(private categoryService:CategoryService){}
  
  onDelete(id:number){
    this.categoryService
      .deleteCategory(id)
      .subscribe(res => {
          console.log(res)
          
      },error => {
         console.log(error)
      })
     window.location.reload();
     this.onCancel();
}
  onCancel() {
     let a = document.getElementById("delete-category")
     a?.classList.add("hidden");
  }
}
