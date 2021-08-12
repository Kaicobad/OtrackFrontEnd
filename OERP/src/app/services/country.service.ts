import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CountryModel } from ".././models/country.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _HttpClient:HttpClient) { }


  addcountryUrl = "https://localhost:44334/api/Country/addcountry";
  getallcountryUrl = "https://localhost:44334/api/Country/getallcountry";
  getcountrybyIdUrl = "https://localhost:44334​/api/Country/getcountrybyid/";
  countryxistUrl = "https://localhost:44334​/api/Country/ifcountrynamealreadyexists/";
  countryremoveUrl = "https://localhost:44334/api/Country/deletecountrybyid/";
  countryeditUrl = "https://localhost:44334​/api/ProductUnit/updateproductunit";


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
