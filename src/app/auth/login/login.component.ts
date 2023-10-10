import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
     LoginForm:FormGroup;
     error:boolean = false;
     errorMessage:string= '';
     

     constructor(private authService:AuthService,private router:Router){
      this.LoginForm = new FormGroup({
        'Email' : new FormControl(null,[Validators.required,Validators.email]),
        'Password' : new FormControl(null,Validators.required)
       })
     }

     ngOnInit(): void {}

     onSubmit(){
         const email = this.LoginForm.value.Email
         const password = this.LoginForm.value.Password
         this.authService.login(email,password)
             .subscribe((res) => {
                 console.log(res)
                 this.router.navigate(['/'])
             },
               (error) => {
                  console.log(error);
               }
             )
     }
}
