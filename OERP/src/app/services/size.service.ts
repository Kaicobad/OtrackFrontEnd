import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SizeModel } from ".././models/size.model";

@Injectable({
  providedIn: 'root'
})
export class SizeService
{
  addsizeUrl = "https://localhost:44334/api/Size/addsize";
  getallsizeUrl = "https://localhost:44334/api/Size/getallize";
  getsizebyIdUrl = "https://localhost:44334​/api​/Size​/getsizebyid​/{id}";
  sizexistUrl = "https://localhost:44334​/api​/Size​/ifsizenamealreadyexists​/{name}"
  sizeremoveUrl = "https://localhost:44334/api/Size/deletesizebyid/"
  sizeEditUrl = "https://localhost:44334​/api​/Size​/Editsize​/{id}"

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
