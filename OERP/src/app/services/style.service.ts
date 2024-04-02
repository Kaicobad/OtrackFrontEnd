import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StyleModel } from ".././models/style.model";
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StyleService
{
  // private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  addstyleUrl = environment.apiUrl + 'Style/addstyle';
  getallstyleUrl = environment.apiUrl + 'Style/getallstyle';
  getstylebyIdUrl = environment.apiUrl + 'Style​/getstylebyid​/{id}';
  stylexistUrl = environment.apiUrl + 'Style​/ifstylenamealreadyexists​/{name}';
  styleremoveUrl = environment.apiUrl + 'Style/deletestylebyid/';
  styleEditUrl = environment.apiUrl + 'Style​/EditStyle​/{id}';

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
