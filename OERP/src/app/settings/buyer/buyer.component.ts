import { Component, OnInit } from '@angular/core';
import { BuyerService } from './../../services/buyer.service';
import { ToastrService  } from "ngx-toastr";
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  buyerDatas: any = [];
  constructor(private _BuyerService: BuyerService,
              private _ToastrService:ToastrService,
              private _Router : Router) { }

  ngOnInit(): void
  {
    this.getBuyer()
  }

//go to buyer add
buyerroute(){
this._Router.navigate(['settings/addbuyer'])
}
//go to buyer add

  getBuyer(): void {
    this._BuyerService
      .getallbuyer()
      .subscribe((response: any) => {
        this.buyerDatas = response.value;
        this._ToastrService.success("Buyers's Loaded !")
      });

  }
  deletebuyer(id : any)
  {
    this._BuyerService.removebuyer(id).subscribe
    (
      (response: any) =>
        {
          this._ToastrService.warning("ID :" + id + " Buyer has been " + response.message),
          window.location.reload();
        },
        (error : any) =>
        {
          this._ToastrService.error(error.statusCode, error.message),
          console.warn(error)
        }
    );
  }

}
