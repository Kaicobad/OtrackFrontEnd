import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';
import { ToastrService  } from "ngx-toastr";
import {Renderer2} from '@angular/core';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  cityDatas : any = [];
  countryDatas: any = [];
  constructor(private _CityService: CityService,private _CountryService : CountryService,
    private _ToastrService: ToastrService,private _Renderer2 : Renderer2) { }

  ngOnInit(): void
  {
    this.getcountry();
  }
  //get all country in select List
  getcountry(): void
  {
    this._CountryService
      .getallcountry()
      .subscribe((response: any) => {
        this.countryDatas = response.value;
      });
  }

//add city
  userCity()
  {
    this._CityService.addcity(this.cityDatas).subscribe
      (
        (response: any) => {
          this._ToastrService.success(response.message),
            this.cityDatas = []
        },
        (error: any) => {
          this._ToastrService.error(error.message),
            console.warn(error)
        }
      );
    this.cityDatas = [];
  }

}
