import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenerComponent } from './opener/opener.component';
import { NavComponent } from './nav/nav.component';
import { StatusComponent } from './status/status.component';
import { CallerService } from './caller.service';
import {HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    OpenerComponent,
    NavComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [CallerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
