import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginModel } from "../models/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient : HttpClient) { }

  //login Api from Backend
  loginUrl = "https://localhost:44334/api/Login/login";
   postLoginData(data :any)
    {
      const _LoginModel : LoginModel=
      {
        email : data.email,
        password: data.password
      };

      return this._HttpClient.post<any>(this.loginUrl, _LoginModel);
    }

}
