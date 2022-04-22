import { RegionServicesService } from './../../services/region-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  showOrHide=true
  constructor(private regionSer: RegionServicesService) {}

  ngOnInit(): void {
 
  }
  toggleShow(){
    this.showOrHide=!this.showOrHide
  }

}
