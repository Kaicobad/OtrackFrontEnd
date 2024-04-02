import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CountryModel } from ".././models/country.model";
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _HttpClient:HttpClient) { }


  addcountryUrl = environment.apiUrl + 'Country/addcountry';
  getallcountryUrl = environment.apiUrl + 'Country/getallcountry';
  getcountrybyIdUrl = environment.apiUrl + 'Country/getcountrybyid/';
  countryxistUrl = environment.apiUrl + 'Country/ifcountrynamealreadyexists/';
  countryremoveUrl = environment.apiUrl + 'Country/deletecountrybyid/';
  countryeditUrl = environment.apiUrl + 'ProductUnit/updateproductunit';


   // post country information
   addcountry(data :any)
   {
     const _CountryModel : CountryModel=
     {
       name : data.name,
     };

     return this._HttpClient.post<any>(this.addcountryUrl,_CountryModel);
   }

   //get Country information
   getallcountry()
   {
    return this._HttpClient.get<any>(this.getallcountryUrl);
   }

   //Delete Country Information
   removecountry(id : string)
   {
     return this._HttpClient.delete(this.countryremoveUrl+id);
   }
   //Edit Country
  //  EditCountry(data : any){
  //   return this._HttpClient.put(this.EditCountry, id, data);
  //  }

}
