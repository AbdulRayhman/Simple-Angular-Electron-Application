import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Appervice } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Appervice]
})
export class AppComponent {
  title = 'app';
  public postResponse:any;
  public posts:any = [];
  constructor(private _electronService: ElectronService, public appService : Appervice) {
    this.appService.getServiceData().subscribe(res=>{
      console.log(res);
        this.posts= res.json();
    },err=>{
      console.log(err);
      
    });
    this.appService.postServiceData().subscribe(res=>{
      console.log(res.json());
      this.postResponse = res.json();
    },err=>{
      console.log(err);
      
    });
  }   // DI
  
  // launchWindow() {
  //   this._electronService.shell.openExternal('https://coursetro.com');
  // }
}
