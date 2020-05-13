import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallerService {
  /*
  public server  = 'http://192.168.100.179/'
  public readState = 'api/readState'
  public toggleGPIO = 'api/toggleGPIO'
  public UserDetails = 'api/getUserDetails'
  /*

  /**/
  public server  = '/assets/'
  public readState = 'api/readState.json'
  public toggleGPIO = 'api/toggleGPIO.json'
  public StatusHistory = 'api/stateChanges.json'

   /* this is just an example for  auth guard and can Activate, real authentication shoould be done on the backend with sessions */
  public UserDetails = 'api/userDetails.json'
  public loggedInStatus = false;

  constructor(private _http: HttpClient) { }


  setLoggedIn(value : boolean){
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username,password){
    return this._http.get(this.server + this.UserDetails,{})
  }

  getStatus(): Observable<Post> {
    /* calling the api to get status */    
   return this._http.get<Post>(this.server + this.readState);    
   
  }

  getStatusHistory(): Observable<Post[]> {
    /* calling the api to get status */    
   return this._http.get<Post[]>(this.server + this.StatusHistory);    
   
  }  

  toggleStatus(){
    /* calling the api to set status */
    return this._http.get<Post>(this.server + this.toggleGPIO);        
  }

}
