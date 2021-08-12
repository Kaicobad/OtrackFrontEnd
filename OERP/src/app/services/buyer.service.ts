import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BuyerModel } from ".././models/buyer.model";

@Injectable({
  providedIn: 'root'
})
export class BuyerService
{
  addbuyerUrl = "https://localhost:44334/api/Buyer/addbuyer";
  getallbuyerUrl = "https://localhost:44334/api/Buyer/getallbuyer";
  getbuyerbyIdUrl = "https://localhost:44334​/api​/Buyer/getbuyerbyid​/";
  buyerxistUrl = "https://localhost:44334​/api​/Buyer/ifbuyernamealreadyexists​/{name}"
  buyerremoveUrl = "https://localhost:44334/api/Buyer/deletebuyerbyid/"
  buyerEditUrl = "https://localhost:44334​/api​/Buyer/Editbuyer​/{id}"

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
