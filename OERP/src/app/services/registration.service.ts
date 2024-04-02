import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegistrationModel } from "../models/registraion.model";
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _HttpClient : HttpClient) { }

  registrationUrl = environment.apiUrl + 'Registration/register';
   postRegistraionData(data :any)
    {
      const _RegistrationModel :   RegistrationModel=
      {
        name : data.name,
        email : data.email,
        phoneNumber: data.phoneNumber,
        password: data.password
      };

      return this._HttpClient.post<any>(this.registrationUrl, _RegistrationModel);
    }
}
