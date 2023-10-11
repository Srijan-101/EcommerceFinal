import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUser implements CanActivate {
    constructor(private router: Router,private authService:AuthService) {}
    canActivate(): boolean {
      if (this.authService.currentUserValue.Role === 'CUSTOMER') {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
  }