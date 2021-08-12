import { Component, OnInit } from '@angular/core';
import { LoginService } from "./../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _LoginService : LoginService) { }
  loginUserData : any = {};
  loginUser()
  {
    this._LoginService.postLoginData(this.loginUserData).subscribe
    (
      result =>{
        localStorage.setItem('token',result.token),
        // this.router.navigate(['auth/login'])
        alert('this is login'),
        console.log(result);


      },
      error => console.warn(error)
    );
  }

  ngOnInit(): void {
  }

}
