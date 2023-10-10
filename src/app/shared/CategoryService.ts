import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, pipe } from "rxjs";

@Injectable()
export class CategoryService {
   
    constructor(private http:HttpClient){}
   
    getCategories(): Observable<{id:number,type:string}[]> {
        return this.http.get("http://localhost:8080/api/category/getAll")
          .pipe(
            map((res: any) => {

              return res.data; 
            })
          );
      }


      saveCategory(CategoryData:{type:string}):Observable<any> {
        return this.http.post("http://localhost:8080/api/category/save", CategoryData);
      }

      deleteCategory(id:number):Observable<any>{
        return this.http.delete(`http://localhost:8080/api/category/delete/${id}`)
          .pipe(
            map((res: any) => {
              return res; 
            })
          );
    }

    
    
}