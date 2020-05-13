import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';
import { Post } from '../post';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public statues = [];

  constructor(private _CallerService: CallerService) { }

  ngOnInit(): void {
    this._CallerService.getStatusHistory().subscribe(
        data => this.statues = data
      );
    
  }

}
