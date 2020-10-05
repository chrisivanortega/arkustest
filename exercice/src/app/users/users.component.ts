import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userslist = [];
  constructor(private _CallerService: CallerService) { }

  ngOnInit(): void {
    this._CallerService.getUsers().subscribe(
      data => this.userslist = data
    );
      
  }
}
