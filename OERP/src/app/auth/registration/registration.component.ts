import { Component, OnInit } from '@angular/core';
import { RegistrationService } from ".././../services/registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _RegistrationService: RegistrationService) { }

registerUserData :any = {};

registerUser()
{
  this._RegistrationService.postRegistraionData(this.registerUserData).subscribe
    (
      result =>{
        // localStorage.setItem('token',result.token)
        // this.router.navigate(['auth/login'])
        alert('User Registered !')
      },
      error => console.warn(error)
    );
}

  ngOnInit(): void {
  }

}
