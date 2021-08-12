import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ColorModel } from ".././models/color.model";

@Injectable({
  providedIn: 'root'
})
export class ColorService
{
  addcolorUrl = "https://localhost:44334/api/Color/addcolor";
  getallcolorUrl = "https://localhost:44334/api/Color/getallcolor";
  getcolorbyIdUrl = "https://localhost:44334​/api​/Color​/getcolorbyid​/{id}";
  colorxistUrl = "https://localhost:44334​/api​/Color​/ifcolornamealreadyexists​/{name}"
  colorremoveUrl = "https://localhost:44334/api/Color/deletecolorbyid/"
  colorEditUrl = "https://localhost:44334​/api​/Color​/Editcolor​/{id}"

  constructor(private _HttpClient :HttpClient) { }
  // post color information
  addcolor(data :any)
  {
    const _ColorModel : ColorModel=
    {
      name : data.name,
      description : data.description
    };

    return this._HttpClient.post<any>(this.addcolorUrl, _ColorModel);
  }

  //get color information
  getallcolor()
  {
   return this._HttpClient.get<any>(this.getallcolorUrl);
  }

  //Delete color Information
  removecolor(id : any)
  {
    return this._HttpClient.delete(this.colorremoveUrl+id);
  }
}
