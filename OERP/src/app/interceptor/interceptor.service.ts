import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private _Injector : Injector) { }

  intercept(req : any, next : any)
  {
    let loginService = this._Injector.get(LoginService)
    let tokenizeReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${loginService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
