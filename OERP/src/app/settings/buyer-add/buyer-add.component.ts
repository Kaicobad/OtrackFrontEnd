import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/services/buyer.service';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';
import { ToastrService  } from "ngx-toastr";
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-buyer-add',
  templateUrl: './buyer-add.component.html',
  styleUrls: ['./buyer-add.component.css']
})
export class BuyerAddComponent implements OnInit {

  selectedCity = 0;

  buyerDatas : any = [];
  cityDatas : any = [];
  countryDatas : any = [];


  constructor(private _BuyerService : BuyerService,private _CityService : CityService,
     private  _CountryService : CountryService, private _ToastrService : ToastrService) { }

  ngOnInit(): void
  {
    this.getcity();
    this.getcountry();
    // this.onSelectCountry(this.countryDatas.countryId);
  }


  //get city for select list
  getcity(): void
  {
    this._CityService
      .getallcity()
      .subscribe((response: any) =>
      {
        this.cityDatas = response.value;
      });
  }
  //get Country
  getcountry()
  {
    this._CountryService
      .getallcountry()
      .subscribe((response: any) =>
      {
        this.countryDatas = response.value;
      });
  }


  onSelectCountry(id: any)
  {
    // this.cityDatas = this._CityService.getcitybyId(id);

  }


  userBuyer()
  {
    this._BuyerService.addbuyer(this.buyerDatas).subscribe
      (
        (response: any) => {
          this._ToastrService.success(response.message),
            this.buyerDatas = []
        },
        (error: any) => {
          this._ToastrService.error(error.message),
            console.warn(error)
        }
      );
    this.buyerDatas = [];
  }

}
