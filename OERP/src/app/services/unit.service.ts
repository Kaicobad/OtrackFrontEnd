import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UnitModel } from ".././models/unit.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnitService
{
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  addunitUrl = "https://localhost:44334/api/ProductUnit/addproductunit";
  getallunitUrl = "https://localhost:44334/api/ProductUnit/getallproductunit";
  getunitbyIdUrl = "https://localhost:44334​/api​/ProductUnit​/getproductunitbyid​/";
  unitxistUrl = "https://localhost:44334​/api​/ProductUnit​/ifproductunitnamealreadyexists​/";
  unitremoveUrl = "https://localhost:44334/api/ProductUnit/deleteproductunitbyid/";
  unitEditUrl = "https://localhost:44334​/api/ProductUnit/updateproductunit";

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
