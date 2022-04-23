import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Country } from 'src/app/model/coutry.model';
import { RegionServicesService } from 'src/app/services/region-services.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  @Input('data') countrycode = '';
  countryList: Country[] = [];
  country: Country | undefined;
  map!: L.Map;
  marker!: L.Marker;

  constructor(private service: RegionServicesService) {}

  ngOnInit(): void {
    this.initMap();

    this.showMapByCountryCode(this.countrycode);
  }
  ngOnChanges() {
    this.showMapByCountryCode(this.countrycode);
  }

  initMap() {
    this.map = L.map('map');
  }
  setMap(): void {
    this.clearMap();
    this.setView();
    this.setLayerforMap();
    this.setMarkerPopUpforMap();
  }
  setView() {
    this.map.setView(
      [
        (this.country?.location.lat as number) + 2,
        this.country?.location.lng as number,
      ],
      4
    );
  }
  setMarkerPopUpforMap() {
  
    var popup = L.popup({ offset: L.point(20, 30) })
      .setLatLng([
        this.country?.location.lat as number,
        this.country?.location.lng as number-1.5,
      ])
      .setContent(
        `<div class="popup" style="
  text-align: center;"> 
  <img src="https://www.countryflags.io/${this.countrycode}/flat/32.png"> 
  <b style="display:block;"> ${this.country?.countryregion}</b>
  <p style="margin:5px;">Total: <b> ${this.country?.confirmed}</b></p>
  <p style="margin:5px;" >Deaths: <b> ${this.country?.deaths}</b></p>
  </div>`
      )
      .openOn(this.map);
   
  for(let i=0;i<this.service.allRegion?.length;i++){
    let radius = 50000;
      if (this.service.allRegion[i]?.confirmed > 10000) {
        radius = 100000;
      }
      if (this.service.allRegion[i]?.confirmed > 300000) {
        radius = 150000;
      }
      L.circle(
        { lat: this.service.allRegion[i]?.location.lat as number, lng: this.service.allRegion[i]?.location.lng as number },
        {
          radius: radius,
        }
      ).addTo(this.map);
  }

  }

  setLayerforMap() {
    const tiles = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        maxZoom: 20,
      }
    );
    tiles.addTo(this.map);
  }
  clearMap() {
    if (this.marker != null) {
      this.map.removeLayer(this.marker);
    }
  }

  showMapByCountryCode(code: string) {
    this.service.getAllCountry().subscribe((params) => {
      this.countryList = params;
      this.country = this.countryList.find(
        (country) => country.countrycode?.iso2 == code
      );
      this.setMap();
    });
  }
}
