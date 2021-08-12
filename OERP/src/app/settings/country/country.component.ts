import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../services/country.service';
import { ToastrService  } from "ngx-toastr";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countryDatas: any = [];
  constructor(private _CountryService: CountryService, private _ToastrService:ToastrService) { }

  ngOnInit(): void {
    this.getcountry();
  }
//get all colors
getcountry(): void
  {
    this._CountryService
        .getallcountry()
        .subscribe((response: any) =>
        {
          this.countryDatas = response.value;
          this._ToastrService.success("Country's Loaded !")
        });

  }
  //delete Color
  deletecountry(id : any)
  {
    this._CountryService.removecountry(id).subscribe
    (
      (response: any) =>
        {
          this._ToastrService.warning("ID :" + id + " country has been " + response.message),
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
