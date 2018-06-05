import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { NgxElectronModule } from 'ngx-electron';
import { Appervice } from './app.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,HttpClientModule,HttpModule
  ],
  providers: [Appervice],
  bootstrap: [AppComponent]
})
export class AppModule { }
