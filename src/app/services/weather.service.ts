import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key = '2901243398221bd28aae3bceaef83500'
  weatherURL = 'https://api.openweathermap.org/data/2.5/weather'
  CountryURL = 'https://restcountries.com/v3.1/alpha'
  
  constructor( private http:HttpClient ) { }


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
