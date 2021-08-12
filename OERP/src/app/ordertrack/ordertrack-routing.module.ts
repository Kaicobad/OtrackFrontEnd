import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderEditComponent } from './order-edit/order-edit.component';

const routes: Routes =
[
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'addorder',
    component: OrderAddComponent
  },
  {
    path: 'orderdetails',
    component: OrderDetailsComponent
  },
  {
    path: 'editorder',
    component: OrderEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdertrackRoutingModule { }
