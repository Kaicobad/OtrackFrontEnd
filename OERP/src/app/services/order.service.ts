import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OrderModel } from ".././models/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  addorderUrl = "https://localhost:44334/api/Order/addorder";
  getallorderUrl = "https://localhost:44334/api/Order/getallorder";
  getorderbyIdUrl = "https://localhost:44334​/api​/Order/getorderbyid​/{id}";
  orderxistUrl = "https://localhost:44334​/api​/Order/ifordernamealreadyexists​/{name}"
  orderremoveUrl = "https://localhost:44334/api/Order/deleteorderbyid/"
  orderEditUrl = "https://localhost:44334​/api​/Order/Editorder​/{id}"

  constructor(private _HttpClient :HttpClient) { }
  // post order information
  addorder(data :any)
  {
    const _OrderModel: OrderModel =
    {
      id: data.id,
      orderNumber: data.orderNumber,
      poNumber: data.poNumber,
      styleId: data.styleId,
      fcblCode: data.fcblCode,
      buyerId: data.buyerId,
      orderDate: data.orderDate,
      projectedOrderCompleteDate: data.projectedOrderCompleteDate,
      timeForOrderInDays: data.timeForOrderInDays,
      quantity: data.quantity,
      productUnitId: data.productUnitId,
      comboName: data.comboName,
      colorId: data.colorId,
      sizeId: data.sizeId,
      poFileUrl: data.poFileUrl

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
