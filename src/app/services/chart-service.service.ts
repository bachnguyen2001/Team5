import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartServiceService {
  casesByTime: any;

  dates = [];
  cases = [];

  constructor(private http: HttpClient) {}

  getDataChartCountry(country:string) {
    return this.http.get(
      `https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/timeseries?iso2=${country}&onlyCountries=true`
    );
  }
 

  getDate(obj:any){
    let dates=[];
    for(let date in obj){
      dates.push(date)
    }
    return dates;

  }

  getCases(obj:any){
    let cases=[]
    for(let item in obj){
      cases.push(obj[item])
    }
    return cases;
  }


}