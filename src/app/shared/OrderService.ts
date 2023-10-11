import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";


@Injectable()
export class OrderService {
    constructor(private http:HttpClient){}
   
    PlaceOrder(OrderData:any):Observable<any> {
        return this.http.post("http://localhost:8080/api/order/placeOrder", OrderData);
    }
    
    getAll(): Observable<any[]> {
        return this.http.get("http://localhost:8080/api/order/GetAll")
          .pipe(
            map((res: any) => {
              return res.data; 
            })
          );
      }
    

} 