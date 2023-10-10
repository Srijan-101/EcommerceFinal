import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(localStorage.getItem('token')){
      const authToken = 'Bearer ' + localStorage.getItem('token');
    
      const authRequest = request.clone({
        setHeaders: {
          Authorization: authToken,
        },
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}