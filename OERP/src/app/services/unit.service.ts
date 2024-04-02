import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UnitModel } from ".././models/unit.model";
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService
{
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  addunitUrl = environment.apiUrl + 'ProductUnit/addproductunit';
  getallunitUrl = environment.apiUrl + 'ProductUnit/getallproductunit';
  getunitbyIdUrl = environment.apiUrl + 'ProductUnit​/getproductunitbyid​/';
  unitxistUrl = environment.apiUrl + 'ProductUnit​/ifproductunitnamealreadyexists​/';
  unitremoveUrl = environment.apiUrl + 'ProductUnit/deleteproductunitbyid/';
  unitEditUrl = environment.apiUrl + 'ProductUnit/updateproductunit';

  constructor(private _HttpClient:HttpClient) { }

  // post unit information
  addunit(data :any)
  {
    const _UnitModel : UnitModel=
    {

      name : data.name,
      description : data.description
    };

    return this._HttpClient.post<any>(this.addunitUrl,_UnitModel);
  }

  //get unit information
  getallunit()
  {
   return this._HttpClient.get<any>(this.getallunitUrl);
  }

  //Delete unit Information
  removeunit(id : string)
  {
    return this._HttpClient.delete(this.unitremoveUrl+id);
  }
}
