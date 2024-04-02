import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }

  buyer(){
    this._Router.navigate(['settings/buyer'])
  }
  city(){
    this._Router.navigate(['settings/city'])
  }
  country(){
    this._Router.navigate(['settings/country'])
  }
  unit(){
    this._Router.navigate(['settings/unit'])
  }

  style(){
    this._Router.navigate(['settings/style'])
  }
  color(){
    this._Router.navigate(['settings/color'])
  }
  size(){
    this._Router.navigate(['settings/size'])
  }
  order(){
    this._Router.navigate(['ordertrack/addorder'])
  }

  userReg(){
    this._Router.navigate(['auth/registration'])
  }

}
