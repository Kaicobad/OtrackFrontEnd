import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SizeModel } from ".././models/size.model";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SizeService
{
  addsizeUrl = environment.apiUrl + 'Size/addsize';
  getallsizeUrl = environment.apiUrl + 'Size/getallize';
  getsizebyIdUrl = environment.apiUrl + 'Size​/getsizebyid​/{id}';
  sizexistUrl = environment.apiUrl + 'Size​/ifsizenamealreadyexists​/{name}';
  sizeremoveUrl = environment.apiUrl + 'Size/deletesizebyid/';
  sizeEditUrl = environment.apiUrl + 'Size​/Editsize​/{id}';

  constructor(private _HttpClient:HttpClient) { }

  // post size information
  addsize(data :any)
  {
    const _SizeModel : SizeModel=
    {
      name : data.name,
      description : data.description
    };

    return this._HttpClient.post<any>(this.addsizeUrl, _SizeModel);
  }

  //get size information
  getallsize()
  {
   return this._HttpClient.get<any>(this.getallsizeUrl);
  }

  //Delete size Information
  removesize(id : any)
  {
    return this._HttpClient.delete(this.sizeremoveUrl + id);
  }
}
