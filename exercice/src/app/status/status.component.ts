import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {


  public status = {state:0,gpio:17};

  constructor( private _CallerService: CallerService) { }

  ngOnInit(): void { 
    setInterval(() => {
      this._CallerService.getStatus()
      .subscribe(data => this.status = data);
    }, 500);
  }

}
