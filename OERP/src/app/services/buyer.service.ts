import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BuyerModel } from ".././models/buyer.model";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuyerService
{
  addbuyerUrl = environment.apiUrl + 'Buyer/addbuyer';

  // addbuyerUrl = environment.apiUrl + 'Buyer/addbuyer";
  getallbuyerUrl = environment.apiUrl + 'Buyer/getallbuyer';
  getbuyerbyIdUrl = environment.apiUrl + 'Buyer/getbuyerbyid​/';
  buyerxistUrl = environment.apiUrl + 'Buyer/ifbuyernamealreadyexists​/{name}';
  buyerremoveUrl = environment.apiUrl + 'Buyer/deletebuyerbyid/';
  buyerEditUrl = environment.apiUrl + 'Buyer/Editbuyer​/{id}';


  constructor(private _HttpClient :HttpClient) { }

  addbuyer(data :any)
  {
    const _BuyerModel : BuyerModel=
    {
      id: data.id,
      name: data.name,
      cityId: data.cityId,
      address: data.address,
      email: data.email,
      contactPerson: data.contactPerson
    };

    return this._HttpClient.post<any>(this.addbuyerUrl, _BuyerModel);
  }

  //get buyer information
  getallbuyer()
  {
   return this._HttpClient.get<any>(this.getallbuyerUrl);
  }

  // get Buyer By Id
  getbuyerbyId(id : any){
    return this._HttpClient.delete(this.getbuyerbyIdUrl+id);
  }

  //Delete buyer Information
  removebuyer(id : any)
  {
    return this._HttpClient.delete(this.buyerremoveUrl+id);
  }
}
