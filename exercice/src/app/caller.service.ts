import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallerService {
  public doorStatus = {
    status:0,
    lastChange:0
  }

  constructor() { }

  getStatus(){
    /* calling the api to get status */

    return "ON"
  }

  toggleStatus(){
    /* calling the api to get status */
    return
  }

}
