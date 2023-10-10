import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  name:string=""
  
  constructor(private authService:AuthService){}

  ngOnInit(){
       this.name = this.authService.currentUserValue.FirstName
  }

  logOut(){
      this.authService.logout();
  }
}
