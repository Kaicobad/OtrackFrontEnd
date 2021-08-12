import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { ToastrService  } from "ngx-toastr";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  cityDatas: any = [];
  constructor(private _CityService: CityService, private _ToastrService:ToastrService) { }

  ngOnInit(): void
  {
    this.getcolors();
  }
//get all colors
getcolors(): void
{
  this._CityService
      .getallcity()
      .subscribe((response: any) =>
      {
        this.cityDatas = response.value;
        this._ToastrService.success("City's Loaded !")
      });

}
//delete Color
  deletecity(id : any)
  {
    this._CityService.removecity(id).subscribe
    (
      (response: any) =>
        {
          this._ToastrService.warning("ID :" + id + " City has been " + response.message),
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
