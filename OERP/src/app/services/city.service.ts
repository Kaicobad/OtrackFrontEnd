import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CityModel } from ".././models/city.model";
import { filter } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService
{

  addcityUrl = environment.apiUrl + 'City/addcity';
  getallcityUrl = environment.apiUrl + 'City/getallcity';
  getcitybyIdUrl = environment.apiUrl + 'City/getcitybyid​/';
  cityxistUrl = environment.apiUrl + 'City/ifcitynamealreadyexists​/{name}';
  cityremoveUrl = environment.apiUrl + 'City/deletecitybyid/';
  cityEditUrl = environment.apiUrl + 'City/Editcity​/{id}';

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
