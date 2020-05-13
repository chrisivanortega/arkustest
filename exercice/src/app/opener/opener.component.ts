import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent implements OnInit {


  public status = null

  constructor( private _CallerService: CallerService) { }

  ngOnInit(): void {
    this.status = this._CallerService.getStatus()
  }

}
