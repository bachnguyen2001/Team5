import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key = '2901243398221bd28aae3bceaef83500'
  weatherURL = 'https://api.openweathermap.org/data/2.5/weather'
  CountryURL = 'https://restcountries.com/v3.1/name'
  //locationURL = 'http://api.openweathermap.org/geo/1.0/direct'

  constructor( private http:HttpClient ) { }

  // getLocation(place:any) {
  //   return this.http.get(this.locationURL, {
  //     params: {
  //       q:place,
  //       limit:1,
  //       appid:this.key
  //     }
  //   })
  // }

  getWeather(place:any) {
    return this.http.get(this.weatherURL, {
      params: {
        q:place,
        appid:this.key
      }
    })
  }

  getCapital(country:any) {
    let info = this.CountryURL + '/' + country
    return this.http.get(info)
  }
}
