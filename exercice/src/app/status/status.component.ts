import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {



  public status = null


  constructor( private _CallerService: CallerService) { }

  ngOnInit(): void {
    
    this.status = this._CallerService.getStatus()
  }

}
