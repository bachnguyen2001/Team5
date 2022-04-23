import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Region } from 'src/app/model/region.model';
import { RegionServicesService } from 'src/app/services/region-services.service';

@Component({
  selector: 'app-regional-list',
  templateUrl: './regional-list.component.html',
  styleUrls: ['./regional-list.component.css'],
})
export class RegionalListComponent implements OnInit, OnChanges {
  @Input('data') regionName = '';
  region: Region[] = [];
 

  constructor(private regionservice: RegionServicesService) {}

  ngOnInit(): void {
    this.defaultRegion();
  }
  ngOnChanges() {
    this.showRegionOnChange();
  }

  defaultRegion() {
    this.regionservice.getDataByRegion('VN').subscribe((re) => {
      this.region = re;
      this.region[0].fatal =
        (this.region[0]?.deaths / this.region[0]?.confirmed) * 100;
    });
  }

  showRegionOnChange() {
    this.regionservice.getDataByRegion(this.regionName).subscribe((re) => {
      this.region = re;
      this.region[0].fatal = this.region[0]?.deaths / this.region[0]?.confirmed;
     
    });
  }

  
}
