import { Component, OnInit } from '@angular/core';
import { StyleService } from "../../services/style.service";
import { ToastrService  } from "ngx-toastr";
import {Renderer2} from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit
{
styleDatas: any = [];
  constructor(private _StyleService: StyleService,
              private _ToastrService : ToastrService,
              private _Renderer2 : Renderer2,
              private _Router : Router)
  { }

  // renderExternalScript(src: string): HTMLScriptElement {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = src;
  //   script.async = true;
  //   script.defer = true;
  //   this._Renderer2.appendChild(document.body, script);
  //   return script;
  // }


  ngOnInit(): void
  {
    this.getstyles();


    // this.renderExternalScript('./assets/global/plugins/datatables/media/js/jquery.dataTables.min.js').onload = () => {
    //   this._ToastrService.success('script loaded')
    //   // do something with this library
    // }

    // this.renderExternalScript('./assets/admin/pages/scripts/table-managed.js').onload = () => {
    //   this._ToastrService.success('script loaded')
    //   // do something with this library
    // }

    // this.renderExternalScript("./assets/global/plugins/select2/select2.min.js").onload = () => {
    //   this._ToastrService.success('script loaded 2')
    //   // do something with this library

  }
//external Routings
addStyleRoute(){
 this._Router.navigate(['settings/addstyle'])
}

detailedtyleRoute(){
  this._Router.navigate(['settings/detailedstyle'])
}
//external Routings

  //get styles
  getstyles(): void
  {
    this._StyleService
      .getallstyle()
      .subscribe
      (
        (response: any) =>
        {
          this.styleDatas = response.value,
          this._ToastrService.success('Style Loaded !')
        },
        (error : any) => this._ToastrService.error(error.message)
      );
  }

  //delete Style
  deletestyle(id : string)
  {
    this._StyleService.removeStyle(id).subscribe
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
