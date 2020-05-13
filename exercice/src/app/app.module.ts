import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenerComponent } from './opener/opener.component';
import { NavComponent } from './nav/nav.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CallerService } from './caller.service';
import { HttpClientModule } from '@angular/common/http'
import { AuthGuard } from './auth.guard'
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    OpenerComponent,
    NavComponent,
    StatusComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },      
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'admin',
        component:AdminComponent,
        canActivate:[AuthGuard]

      }      
    ])
    
  ],
  providers: [CallerService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
