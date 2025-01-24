import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { };

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
}
