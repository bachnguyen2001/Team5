import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input('data') regionName = '';
  weather:any
  temp!:any
  capital!:string
  humidity!:number
  wind!:number
  cloud!:any
  today: number = Date.now()

  constructor( private weatherService:WeatherService) { }

  ngOnInit(): void {
    

    this.weatherService.getCapital(this.regionName).subscribe((res:any) => {
      
      res.forEach((element:any) => {
        
        let place:any = element.capital
        place.forEach((cap:any) => {
          this.capital = cap
          
          this.weatherService.getWeather(`${this.capital}`).subscribe((res:any) => {
                 let weatherInfo = res.weather
                 weatherInfo.forEach((wea:any) => {
                   this.weather = wea.main
                   
                 });
                 
                 let temp = res.main.temp 
                 this.temp =temp - 273.15
                 this.humidity = res.main.humidity
                 this.wind = res.wind
                 this.wind = res.wind.speed
                 this.cloud = res.clouds.all
                 
               
               })
        });      
      });   
    })

   
    }

    ngOnChanges(): void {
      console.log("region:" + this.regionName)
      this.weatherService.getCapital(this.regionName).subscribe((res:any) => { 
        res.forEach((element:any) => {
          let place:any = element.capital
          place.forEach((cap:any) => {
            this.capital = cap
            console.log(this.capital)
            this.weatherService.getWeather(`${this.capital}`).subscribe((res:any) => {
                   let weatherInfo = res.weather
                   weatherInfo.forEach((wea:any) => {
                     this.weather = wea.main
                   });
                   this.temp = res.main.temp - 273.15
                   this.humidity = res.main.humidity
                   this.wind = res.wind
                   this.wind = res.wind.speed
                   this.cloud = res.clouds.all
                  
             
                 })
          });      
        });   
      })
      
    }

    

}
