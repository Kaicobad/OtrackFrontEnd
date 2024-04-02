import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginModel } from "../models/login.model";
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient : HttpClient, private _Router: Router) { }

  //login Api from Backend
  loginUrl = environment.apiUrl + 'Login/login';
   postLoginData(data :any)
    {
      const _LoginModel : LoginModel=
      {
        email : data.email,
        password: data.password
      };

      return this._HttpClient.post<any>(this.loginUrl, _LoginModel);
    }

    loggedIn()
    {
      return !!localStorage.getItem('token');
    }
    getToken(){
      return localStorage.getItem('token');
    }
    logoutUser(){
      localStorage.removeItem('token'),
      this._Router.navigate([''])
    }

}
