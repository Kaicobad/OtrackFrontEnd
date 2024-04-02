import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ColorModel } from ".././models/color.model";
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ColorService
{
  addcolorUrl =  environment.apiUrl + 'Color/addcolor';
  getallcolorUrl = environment.apiUrl + 'Color/getallcolor';
  getcolorbyIdUrl = environment.apiUrl + 'Color​/getcolorbyid​/{id}';
  colorxistUrl = environment.apiUrl + 'Color​/ifcolornamealreadyexists​/{name}';
  colorremoveUrl = environment.apiUrl + 'Color/deletecolorbyid/';
  colorEditUrl = environment.apiUrl + 'Color​/Editcolor​/{id}';

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
