import { Component, OnInit } from '@angular/core';
import { UnitService } from "../../services/unit.service";
import { ToastrService  } from "ngx-toastr";
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  constructor(private _UnitService: UnitService, private _ToastrService: ToastrService) { }
  unitDatas: any = [];
  ngOnInit(): void
  {
    this.getunits();
  }
  // get all Unit
  getunits(): void
  {
    this._UnitService
        .getallunit()
        .subscribe((response: any) =>
        {
          this.unitDatas = response.value;
          this._ToastrService.success('Unit Loaded !')
        });
  }

  //deleteUnit
  deleteunit(id : any)
  {
    this._UnitService.removeunit(id).subscribe
    (
      (response: any) =>
        {
          this._ToastrService.warning("ID :" + id + " Unit has been " + response.message),
          window.location.reload();
        },
        (error : any) =>
        {
          this._ToastrService.error(error.statusCode, error.message),
          console.warn(error)
        }
    )
  }
}
