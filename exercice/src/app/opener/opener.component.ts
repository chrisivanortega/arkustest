import { Component, OnInit } from '@angular/core';
import { CallerService } from '../caller.service';


@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent implements OnInit {


  public status = {state:0,gpio:17};

  constructor( private _CallerService: CallerService) { }

  

  ngOnInit(): void {
    setInterval(() => {
      this._CallerService.getStatus()
      .subscribe(data => this.status = data);
    }, 500);
  }


  
  toggleDoor(){
    
    this._CallerService.toggleStatus()
    .subscribe(data => this.status = data);

    console.log(this.status)
  }
  
}
