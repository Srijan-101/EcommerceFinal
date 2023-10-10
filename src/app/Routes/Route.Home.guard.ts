import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardHome implements CanActivate {
    constructor(private router: Router,private authService:AuthService) {}
    canActivate(): boolean {
      if (this.authService.currentUserValue.Role === 'CUSTOMER' || !localStorage.getItem("currentUser")) {
        return true;
      }
      this.router.navigate(['/admin-dashboard']);
      return false;
    }
  }