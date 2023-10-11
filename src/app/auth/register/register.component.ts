import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  SignUp:FormGroup;
  errorMessage:string="";
  error:boolean=true;

  constructor(private Authservice:AuthService,private router:Router){
    this.SignUp = new FormGroup({
      'FirstName' : new FormControl(null,Validators.required),
      'LastName': new FormControl(null,Validators.required) ,
      'Email' : new FormControl(null,[Validators.required,Validators.email]),
      'Password' : new FormControl(null,Validators.required),
      'RePassword':new FormControl(null,Validators.required)
     })
  }

  onSubmit(){

    const email = this.SignUp.value.Email;
    const password = this.SignUp.value.Password;
    const rePassword = this.SignUp.value.RePassword;
    const firstName = this.SignUp.value.FirstName;
    const lastName = this.SignUp.value.LastName;

    if(password !== rePassword){
       this.errorMessage = "Make sure your password match!"
       this.error=true;
    }else{
       this.Authservice
          .SignUp({
               firstName,
               lastName,
               password,
               email,
               roleId:2
           })
           .subscribe((res) => {
                this.errorMessage = "Successfully registered, please log in!"
                this.error = false;
                this.SignUp.reset();
                setTimeout(() => {
                    this.router.navigate(['/login'])
                },3000)
            },error => {
                error.error.data ? this.errorMessage=error.error.data[0] : this.errorMessage=error.error.errormessage;
                this.error = true;
            })
    }
  }
}
