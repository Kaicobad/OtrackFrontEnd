import { Component, OnInit } from '@angular/core';
import { ColorService } from "../../services/color.service";
import { ToastrService  } from "ngx-toastr";

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorDatas: any = [];
  constructor(private _ColorService: ColorService, private _ToastrService: ToastrService) { }

  ngOnInit(): void {
  }
//add color
userColor()
{
  this._ColorService.addcolor(this.colorDatas).subscribe
  (
    (response: any) =>
    {
      this._ToastrService.success(response.message),
      this.colorDatas = []
    },
    (error : any) =>
    {
      this._ToastrService.error(error.message),
      console.warn(error)
    }
  );
  this.colorDatas = [];
}
}
