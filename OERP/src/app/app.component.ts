import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'OERP';
  constructor(public _LoginService: LoginService) { }
  ngOnInit(): void
  {
    this.logged()
  }
  logged()
  {
    var stat ;
    if (this._LoginService.getToken() == null )
    {
      return stat = "true";
    }
    else
    {
      return stat = "false";
    }

  }
}
