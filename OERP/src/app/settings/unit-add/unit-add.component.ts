import { Component, OnInit } from '@angular/core';
import { UnitService } from "../../services/unit.service";
import { ToastrService  } from "ngx-toastr";

@Component({
  selector: 'app-unit-add',
  templateUrl: './unit-add.component.html',
  styleUrls: ['./unit-add.component.css']
})
export class UnitAddComponent implements OnInit {

  constructor(private _UnitService : UnitService, private _ToastrService: ToastrService) { }

  unitData : any = {}
  ngOnInit(): void {
  }

  userUnit()
  {
    this._UnitService.addunit(this.unitData).subscribe
    (
      (response) => this._ToastrService.success(response.message),
      (error) => this._ToastrService.error(error.message)
    )
    this.unitData = [];
  }
}
