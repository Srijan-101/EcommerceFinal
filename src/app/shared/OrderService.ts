import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";


@Injectable()
export class OrderService {
    constructor(private http:HttpClient){}
   
    PlaceOrder(OrderData:any):Observable<any> {
        return this.http.post("http://localhost:8080/api/order/placeOrder", OrderData);
    }

    UpdateOrder(OrderData:any):Observable<any> {
      return this.http.put("http://localhost:8080/api/order/updateStatus", OrderData);
    }
    
    getAll(): Observable<any[]> {
        return this.http.get("http://localhost:8080/api/order/GetAll")
          .pipe(
            map((res: any) => {
              return res.data; 
            })
          );
      }

      getOrderbyId(id:number):Observable<any>{
        return this.http.get(`http://localhost:8080/api/order/getOrderByUser/${id}`)
          .pipe(
            map((res: any) => {
                return res;
            })
          );
      }
    

} 