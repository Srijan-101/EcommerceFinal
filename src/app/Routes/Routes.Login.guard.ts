import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuardLogin implements CanActivate {
  constructor(private router: Router,private authService:AuthService) {}
  canActivate(): boolean {
    if (!localStorage.getItem("currentUser")) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}