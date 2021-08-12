import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StyleModel } from ".././models/style.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService
{
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  addstyleUrl = "https://localhost:44334/api/Style/addstyle";
  getallstyleUrl = "https://localhost:44334/api/Style/getallstyle";
  getstylebyIdUrl = "https://localhost:44334​/api​/Style​/getstylebyid​/{id}";
  stylexistUrl = "https://localhost:44334​/api​/Style​/ifstylenamealreadyexists​/{name}";
  styleremoveUrl = "https://localhost:44334/api/Style/deletestylebyid/";
  styleEditUrl = "https://localhost:44334​/api​/Style​/EditStyle​/{id}";

  constructor(private _HttpClient:HttpClient) { }

  // post style information
  addstyle(data :any)
  {
    const _StyleModel : StyleModel=
    {

      name : data.name,
      description : data.description
    };

    return this._HttpClient.post<any>(this.addstyleUrl, _StyleModel);
  }

  //get style information
  getallstyle()
  {
   return this._HttpClient.get<any>(this.getallstyleUrl);
  }

  //Delete Style Information
  removeStyle(id : string)
  {
    return this._HttpClient.delete(this.styleremoveUrl+id);
  }
}
