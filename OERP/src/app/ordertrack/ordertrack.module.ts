import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdertrackRoutingModule } from './ordertrack-routing.module';
import { OrderComponent } from './order/order.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderEditComponent } from './order-edit/order-edit.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderAddComponent,
    OrderDetailsComponent,
    OrderEditComponent
  ],
  imports: [
    CommonModule,
    OrdertrackRoutingModule,
    FormsModule
  ]
})
export class OrdertrackModule { }
