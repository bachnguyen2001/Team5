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
    console.log(this.regionName)

    this.weatherService.getCapital(this.regionName).subscribe((res:any) => {
      //console.log(res)
      res.forEach((element:any) => {
        
        let place:any = element.capital
        place.forEach((cap:any) => {
          this.capital = cap
          console.log(cap)
          this.weatherService.getWeather(`${this.capital}`).subscribe((res:any) => {
                 let weatherInfo = res.weather
                 weatherInfo.forEach((wea:any) => {
                   this.weather = wea.main
                   console.log(this.weather)
                 });
                 console.log(res)
                 let temp = res.main.temp 
                 this.temp =temp - 273.15
                 this.humidity = res.main.humidity
                 this.wind = res.wind
                 this.wind = res.wind.speed
                 this.cloud = res.clouds.all
                 
                 console.log(res.main.temp - 273.15)
                 console.log('template:' + this.temp)
                 console.log("humidity:" +this.humidity)
                 console.log("wind:" + this.wind)
                 console.log("cloud:" + this.cloud)
               })
        });      
      });   
    })

    // const roundTo = function(num: number) {
    //   const factor = 10 ** 2;
    //   return Math.round(num * factor) / factor;
    // };
    }

    ngOnChanges(): void {
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
                   this.temp = res.main.temp - 273.15
                   this.humidity = res.main.humidity
                   this.wind = res.wind
                   this.wind = res.wind.speed
                  
                 console.log(res.main.temp)
                 console.log('template:' + this.temp)
                 console.log("humidity:" +this.humidity)
                 console.log("wind:" + this.wind)
                 })
          });      
        });   
      })
      
    }

    

}
