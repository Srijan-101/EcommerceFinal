import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Helper method to get the current user value
  get currentUserValue() {
    return this.currentUserSubject.value;
  }

  // Login method
  login(email: string, password: string): Observable<any> {
    
    const headers = new HttpHeaders().set('SkipInterceptor', '');
    const options = { headers };


    return this.http
      .post<any>('http://localhost:8080/api/user/Login',{ email, password })
      .pipe(
        map(response => {
          const token = response.jwt;
          if (token) {
            const user = jwt_decode(token);
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('token', token);
            this.currentUserSubject.next(user);
            return user;
          }
          throw new Error("Login failed");
        })
      );
  }


  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }


  getToken(): string | null {
    return localStorage.getItem('token');
  }

  
  parseToken(token: string): any | null {
    try {
      return jwt_decode(token);
    } catch (error) {
      console.error('Error parsing JWT token:', error);
      return null;
    }
  }
}