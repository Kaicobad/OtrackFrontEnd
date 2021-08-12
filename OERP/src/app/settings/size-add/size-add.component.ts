import { Component, OnInit } from '@angular/core';
import { SizeService } from "./../../services/size.service";
import { ToastrService  } from "ngx-toastr";

@Component({
  selector: 'app-size-add',
  templateUrl: './size-add.component.html',
  styleUrls: ['./size-add.component.css']
})
export class SizeAddComponent implements OnInit {

  constructor(private _SizeService: SizeService, private _ToastrService: ToastrService) { }
  sizeData : any = {};


  ngOnInit(): void {
  }
  //add size
  userSize()
  {
    this._SizeService.addsize(this.sizeData).subscribe
    (
      (response: any) =>
      {
        this._ToastrService.success(response.message),
        this.sizeData = []
      },
      (error : any) =>
      {
        this._ToastrService.error(error.message),
        console.warn(error)
      }
    );
    this.sizeData = [];
  }
}
