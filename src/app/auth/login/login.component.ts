import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  isLogin:boolean=false;
  error!: string | null;

  constructor(private authService:AuthServiceService, private formBuilder:FormBuilder){};

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email: ['', [Validators.required]],
    password: ["", [Validators.required]],
    })
  }

  login(){
    this.isLogin=true;
  }

  register(){
    this.isLogin=false;
  }

  submitform(){
    if(!this.loginForm || this.loginForm.invalid){
      return;
    }

    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;

    if(this.isLogin){
      this.authService.login(email,password).subscribe((response:any)=>{
        console.log(response);
      },
      (error:string)=>{
        this.error=error;
      }
      );
    }
    else{
      this.authService.register(email,password).subscribe((response:any)=>{
        console.log(response);
      },
      (error:string)=>{
        this.error=error;
      });
    }
  }
}
