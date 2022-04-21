import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/coutry.model';
import { Region } from '../model/region.model';


@Injectable({
  providedIn: 'root',
})
export class RegionServicesService {
  header = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  allRegion!:Array<any>
  constructor(private http: HttpClient) {}

  getAllRegion():Observable<[]> {
    return this.http.get<[]>('https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest',{headers:this.header});
  }

  getDataByRegion(region: string): Observable<Region[]> {
    return this.http.get<Region[]>(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=${region}&onlyCountries=true`,
      { headers: this.header }
    );
  }

  getToTalCasesRegion(name: string) {
    return this.http.get(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=${name}&onlyCountries=true`,
      { headers: this.header }
    );
  }

  getAllCountry() {
    return this.http.get<Country[]>(
      'https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true'
    );
  }
  confirmedCase(arr: any) {
    let confirmed = [];
    for (let i = 0; i < arr.length; i++) {
      confirmed.push(arr[i].confirmed);
    }
    return confirmed;
  }
  recoverCase(arr: any) {
    let recover = [];
    for (let i = 0; i < arr.length; i++) {
      recover.push(arr[i].recovered);
    }
    return recover;
  }
  deathCase(arr: any) {
    let death = [];
    for (let i = 0; i < arr.length; i++) {
      death.push(arr[i].deaths);
    }
    return death;
  }
}
