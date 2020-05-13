import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _CallerService: CallerService,private _router: Router) { }

  public loginError = false

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const username = target.querySelector("#inputEmail").value
    const password = target.querySelector("#inputPassword").value
    this._CallerService.getUserDetails(username,password).subscribe(data => {
      
      if (data['username'] == username && data['password'] == password){
        this._router.navigate(['admin'])
        this._CallerService.setLoggedIn(true)
      }else{
        this._CallerService.setLoggedIn(false)
        this.loginError = true
      }
      /*
      if (data.success){
        // redirect to admin
      }else{
        window.alert('Invalid')
      }
      */
    })
    
  }
}
