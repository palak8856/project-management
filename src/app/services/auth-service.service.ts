import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user!:User | null;

  constructor(private http:HttpClient, private router:Router) { };

  register(email:string, password:string){
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKg1j-tMtWgXLPA3ZWG8U-zO1z7Yit6G8",{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }

  login(email:string, password:string){
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKg1j-tMtWgXLPA3ZWG8U-zO1z7Yit6G8",{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }

  isLoggedIn(){
    return !!localStorage.getItem("user");
  }

  isAdmin(){
    const user=JSON.parse(localStorage.getItem("user") || '{}');
    if(user){
      return user.role==="admin";
    }
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(["/login"]);
  }
}
