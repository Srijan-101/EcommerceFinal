import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, merge, pipe, switchMap } from "rxjs";

@Injectable()
export class ProductService {

  
    constructor(private http:HttpClient){}
  

    saveProduct(productData:any):Observable<any> {
        return this.http.post("http://localhost:8080/api/product/saveProduct", productData);
    }

    updateProduct(productData:any):Observable<any> {
      return this.http.put("http://localhost:8080/api/product/updateProduct", productData);
  }

    getProduct():Observable<any>{
        return this.http.get("http://localhost:8080/api/product/getProduct")
          .pipe(
            map((res: any) => {
                return res;
            })
          );
    }

    getProductbyId(id:number):Observable<any>{
      return this.http.get(`http://localhost:8080/api/product/GetProductById/{id}`)
        .pipe(
          map((res: any) => {
              return res;
          })
        );
    }


    deleteProduct(id:number):Observable<any>{
      return this.http.delete(`http://localhost:8080/api/product/deleteProduct/${id}`)
        .pipe(
          map((res: any) => {
            return res; 
          })
        );
  }

   
}