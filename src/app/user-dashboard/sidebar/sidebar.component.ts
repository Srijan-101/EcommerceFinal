import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private authService:AuthService){}
   name:string=""
   
  ngOnInit(){
       this.name = this.authService.currentUserValue.FirstName
  }

  logOut(){
      this.authService.logout();
      window.location.reload();
  }
}
