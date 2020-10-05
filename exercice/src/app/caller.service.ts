import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallerService {

  constructor(private _http: HttpClient) { }

  springboot = 'http://192.168.100.150:8080'

  getUsers() {
    /* calling the api to get users */    
   return this._http.get<any[]>(this.springboot + '/User');    
   
  } 

  addUser() {
    /* calling the api to get users */    
   return this._http.get<any[]>(this.springboot + '/User');    
   
  }   

  getUserById() {
    /* calling the api to get users */    
   return this._http.get<any[]>(this.springboot + '/User');    
   
  }   


}
