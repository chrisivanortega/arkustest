import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallerService {
  /**/
  public server  = 'http://192.168.100.179/'
  public readState = 'api/readState'
  public toggleGPIO = 'api/toggleGPIO'
  /**/

  /*
  public server  = '/assets/'
  public readState = 'api/readState.json'
  public toggleGPIO = 'api/toggleGPIO.json'
  */


  constructor(private _http: HttpClient) { }


  getStatus(): Observable<Post> {
    /* calling the api to get status */    
   return this._http.get<Post>(this.server + this.readState);    
   
  }

  toggleStatus(){
    /* calling the api to set status */
    return this._http.get<Post>(this.server + this.toggleGPIO);        
  }

}
