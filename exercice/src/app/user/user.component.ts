import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import { Injectable } from "@angular/core";
import {User } from "../User"

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@Injectable({
  providedIn: "root"
})
export class UserComponent implements OnInit {
  public userF: any;
  public user:User;
  public id:any
  
  constructor(private _CallerService: CallerService,private route : ActivatedRoute,private router: Router,private formBuilder: FormBuilder) { 
    this.userF = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',      
    });

  }
  

  ngOnInit(): void {
    
    this.route.params.subscribe((params)=>{      
      this.id = params['id']
      this._CallerService.getUserById(this.id).subscribe(
        data => this.user = data
      );      
   })
   
    

  }


  onSubmiter() {
       
    var body = {
      firstName: this.userF.value.firstName,
      lastName: this.userF.value.lastName,
      email: this.userF.value.email,
      id:this.id
  
    };
    
    this._CallerService.updateUser(body)
    .subscribe( data => {
      this.router.navigate(['/users']);
    });
    


  }
}
