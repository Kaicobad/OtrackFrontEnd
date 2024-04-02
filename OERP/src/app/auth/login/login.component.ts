import { Component, OnInit } from '@angular/core';
import { LoginService } from "./../../services/login.service";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _LoginService : LoginService,
              private _ToastrService : ToastrService,
              private _Router : Router) { }
  loginUserData : any = {};
  loginUser()
  {
    this._LoginService.postLoginData(this.loginUserData).subscribe
    (
      result =>{
        localStorage.setItem('token',result.value.token),
        localStorage.setItem('role',result.value.role),

        // this.router.navigate(['auth/login'])
        this._ToastrService.success("User Loggoed In as "+ result.value.role),
        this._Router.navigate(['settings/buyer'])

      },
      error => console.warn(error)
    );
  }

  ngOnInit(): void {
    // $.backstretch([
    //   "./assets/admin/pages/media/bg/1.jpg",
    //   "./assets/admin/pages/media/bg/2.jpg",
    //   "./assets/admin/pages/media/bg/3.jpg",
    //   "./assets/admin/pages/media/bg/4.jpg"
    // ], {
    //   fade: 1000,
    //   duration: 8000
    // }
    // );
  }

  registration(){
    this._Router.navigate(['auth/registration']);

  }

}
