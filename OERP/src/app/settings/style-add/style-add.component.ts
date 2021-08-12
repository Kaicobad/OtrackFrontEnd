import { Component, OnInit } from '@angular/core';
import { StyleService } from "./../../services/style.service";
import { ToastrService  } from "ngx-toastr";


@Component({
  selector: 'app-style-add',
  templateUrl: './style-add.component.html',
  styleUrls: ['./style-add.component.css']
})
export class StyleAddComponent implements OnInit {

  constructor(private _StyleService: StyleService, private _ToastrService: ToastrService) { }
  styleData : any = {};
  userStyle()
  {
    this._StyleService.addstyle(this.styleData).subscribe
    (
      (response) => this._ToastrService.success(response.message),
      (error) => this._ToastrService.error(error.message),
    );
    this.styleData = [];
  }
  ngOnInit(): void {
  }

}
