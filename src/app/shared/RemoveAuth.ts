// remove-authorization.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RemoveAuthorizationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.url.includes('https://api.cloudinary.com/v1_1/dj481z3ic/image/upload')) {

      const clonedRequest = req.clone({
        setHeaders: {
        },
      });

      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
