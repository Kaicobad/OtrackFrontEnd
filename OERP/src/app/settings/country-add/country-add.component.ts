import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../services/country.service';
import { ToastrService  } from "ngx-toastr";

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css']
})
export class CountryAddComponent implements OnInit {

  constructor(private _CountryService: CountryService, private _ToastrService: ToastrService) { }
  countryDatas :any = {};
  ngOnInit(): void {
  }

  //add Country
  userCountry()
{
  this._CountryService.addcountry(this.countryDatas).subscribe
  (
    (response: any) =>
    {
      this._ToastrService.success(response.message),
      this.countryDatas = []
    },
    (error : any) =>
    {
      this._ToastrService.error(error.message),
      console.warn(error)
    }
  );
  this.countryDatas = [];
}

}
