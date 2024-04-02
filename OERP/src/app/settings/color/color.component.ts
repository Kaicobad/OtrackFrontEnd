import { Component, OnInit } from '@angular/core';
import { ColorService } from "../../services/color.service";
import { ToastrService  } from "ngx-toastr";
import { Router } from '@angular/router';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colorDatas: any = [];
  constructor(private _ColorService: ColorService, private _ToastrService:ToastrService,
    private _Router : Router) { }

  ngOnInit(): void {
    this.getcolors();
  }
//add coulor route
addColorRoute(){
  this._Router.navigate(['settings/addcolor'])
}

//get all colors
  getcolors(): void
  {
    this._ColorService
        .getallcolor()
        .subscribe((response: any) =>
        {
          this.colorDatas = response.value;
          this._ToastrService.success("Color's Loaded !")
        });

  }
  //delete Color
  deletecolor(id : any)
  {
    this._ColorService.removecolor(id).subscribe
    (
      (response: any) =>
        {
          this._ToastrService.warning("ID :" + id + " Color has been " + response.message),
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
