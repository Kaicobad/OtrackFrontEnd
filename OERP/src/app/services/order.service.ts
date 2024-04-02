import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OrderModel } from ".././models/order.model";
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  addorderUrl = environment.apiUrl + 'Order/addorder';
  getallorderUrl = environment.apiUrl + 'Order/getallorder';
  getorderbyIdUrl = environment.apiUrl + 'Order/getorderbyid​/{id}';
  orderxistUrl = environment.apiUrl + 'Order/ifordernamealreadyexists​/{name}';
  orderremoveUrl = environment.apiUrl + 'Order/deleteorderbyid/';
  orderEditUrl = environment.apiUrl + 'Order/Editorder​/{id}';

  constructor(private _HttpClient :HttpClient) { }
  // post order information
  addorder(data :any, file : File)
  {

    const _OrderModel: OrderModel =
    {
      orderNumber: data.orderNumber,
      poNumber: data.poNumber,
      styleId: data.styleId,
      fcblCode: data.fcblCode,
      buyerId: data.buyerId,

      projectedOrderCompleteDate: data.projectedOrderCompleteDate,
      timeForOrderInDays: data.timeForOrderInDays,
      quantity: data.quantity,
      productUnitId: data.unitId,
      comboName: data.comboName,
      colorId: data.colorId,
      sizeId: data.sizeId,
      poFileUrl: file.name,
      poFile : file
    };

    return this._HttpClient.post<any>(this.addorderUrl, _OrderModel);
  }

  //get order information
  getallorder()
  {
   return this._HttpClient.get<any>(this.getallorderUrl);
  }

  //Delete order Information
  removeorder(id : any)
  {
    return this._HttpClient.delete(this.orderremoveUrl+id);
  }
}
