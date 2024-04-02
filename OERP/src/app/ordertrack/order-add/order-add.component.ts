
import { Component, OnInit } from '@angular/core';
import {Renderer2} from '@angular/core';
import { ToastrService  } from "ngx-toastr"
import { BuyerService } from 'src/app/services/buyer.service';
import { StyleService } from './../../services/style.service';
import { SizeService } from './../../services/size.service';
import { ColorService } from './../../services/color.service';
import { UnitService } from './../../services/unit.service';
import { OrderService } from './../../services/order.service';

declare var $: any;

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit
{
  orderDatas: any = [];
  buyerDatas: any = [];
  styleDatas: any = [];
  unitDatas: any = [];
  colorDatas: any = [];
  sizeDatas: any = [];
  fileData: any;
  file: any = File;

  constructor(private _ToastrService : ToastrService,
              private _Renderer2 : Renderer2,
              private _UnitService :UnitService,
              private _ColorService:ColorService,
              private _SizeService: SizeService,
              private _BuyerService : BuyerService,
              private _StyleService : StyleService,
              private _OrderService : OrderService)
  {
    // Contructor Codes Here !
  }

  ngOnInit(): void
  {
    $('.date-picker').datepicker({
      orientation: "left",
      autoclose: true
    });

    this.getunits();
    this.getstyles();
    this.getsizes();
    this.getcolors();
    this.getBuyer();
  }

  onChange(event: any) {
    this.file = event.target.files[0];

  }

//Add Orders
userOrder()
{
  this.fileData = this.file;
  this._OrderService.addorder(this.orderDatas, this.fileData).subscribe
  (
    (response: any) => {
      this._ToastrService.success(" Order information added " + response.message),
        this.orderDatas = []
    },
    (error: any) => {
      this._ToastrService.error(error.message),
        console.warn(error)
    }
  );
this.orderDatas = [];
}

// buyer list
  getBuyer(): void
  {
    this._BuyerService
      .getallbuyer()
      .subscribe((response: any) =>
      {
        this.buyerDatas = response.value;
      });
  }

  //color list
  getcolors(): void
  {
    this._ColorService
        .getallcolor()
        .subscribe((response: any) =>
        {
          this.colorDatas = response.value;
        });

  }

  //get unit list
  getunits(): void
  {
    this._UnitService
        .getallunit()
        .subscribe((response: any) =>
        {
          this.unitDatas = response.value;
        });
  }

  //style list
  getstyles(): void
  {
    this._StyleService
      .getallstyle()
      .subscribe
      (
        (response: any) =>
        {
          this.styleDatas = response.value
        }
      );
  }
  //sizes list
  getsizes(): void
  {
    this._SizeService
        .getallsize()
        .subscribe((response: any) =>
        {
          this.sizeDatas = response.value;
        });
  }
}
