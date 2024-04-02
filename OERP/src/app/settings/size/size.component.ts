import { Component, OnInit } from '@angular/core';
import { SizeService } from "../../services/size.service";
import { ToastrService  } from "ngx-toastr";
import { Router } from '@angular/router';


@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  sizeDatas: any = [];
  constructor(private _SizeService: SizeService, private _ToastrService: ToastrService, private _Router : Router) { }

  ngOnInit(): void {
    this.getsizes();
  }
//route to size add
  addSizeRoute(){
this._Router.navigate(['settings/addsize'])
  }

// get all size
  getsizes(): void
  {
    this._SizeService
        .getallsize()
        .subscribe((response: any) =>
        {
          this.sizeDatas = response.value;
          this._ToastrService.success('Sizes Loaded !')
        });
  }

  // delete Size
  deletesize(id : string)
  {
    this._SizeService.removesize(id).subscribe
    (
      (response: any) =>
        {
          this._ToastrService.warning("ID :" + id + " Style has been " + response.message),
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
