import { Component, OnInit } from '@angular/core';
import { RegionServicesService } from 'src/app/services/region-services.service';

@Component({
  selector: 'app-regione',
  templateUrl: './regione.component.html',
  styleUrls: ['./regione.component.css'],
})
export class RegioneComponent implements OnInit {
  list!: [];
  listName!: any[];
  listRegion!: any[];
  op: any;
  selectedReg = 'VN';
  constructor(private regionservice: RegionServicesService) {}

  ngOnInit(): void {
    this.getRegion();
   
  }

  getRegion() {
    this.regionservice.getAllRegion().subscribe((reg) => {
      this.list = reg;
      this.dataSelection();
    });
  }

  dataSelection() {
    this.listName = this.list.filter((item: any) => {   
        return Boolean(item.countrycode);
    });

    this.regionservice.allRegion=this.listName;
 
    this.listRegion = this.listName.filter(
      (item: any, index: any, arr: any) => {
        return (
          arr.findIndex((t: any) => t.countryregion == item.countryregion) ===
          index
        );
      }
    );
  }
}
