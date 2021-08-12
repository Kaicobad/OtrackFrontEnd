import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CityModel } from ".././models/city.model";
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService
{

  addcityUrl = "https://localhost:44334/api/City/addcity";
  getallcityUrl = "https://localhost:44334/api/City/getallcity";
  getcitybyIdUrl = "https://localhost:44334​/api​/City/getcitybyid​/";
  cityxistUrl = "https://localhost:44334​/api​/City/ifcitynamealreadyexists​/{name}"
  cityremoveUrl = "https://localhost:44334/api/City/deletecitybyid/"
  cityEditUrl = "https://localhost:44334​/api​/City/Editcity​/{id}"

  constructor(private _HttpClient :HttpClient)
  {
    // Something Goes her if needed to iterate constructor
  }

  //add city Informantion
  addcity(data :any)
  {
    const _CityModel : CityModel=
    {
      name : data.name,
      countryId : data.countryId
    };

    return this._HttpClient.post<any>(this.addcityUrl, _CityModel);
  }

  //get city information
  getallcity()
  {
   return this._HttpClient.get<any>(this.getallcityUrl);
  }

  getcitybyId(id : any){
    return this._HttpClient.delete(this.getcitybyIdUrl+id);
  }

  //Delete city Information
  removecity(id : any)
  {
    return this._HttpClient.delete(this.cityremoveUrl+id);
  }
}
