import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather:any
  temp!:number
  place!:any
  capital!:string

  constructor( private weatherService:WeatherService) { }

  ngOnInit(): void {
     

    // this.weatherService.getLocation('London').subscribe((res:any) => {
    //   this.place = res
    //   console.log(res)
    //   this.place.forEach((element:any) => {
    //     this.lat = element.lat
    //     console.log(this.lat)
    //   });
    // })

    this.weatherService.getCapital("Vietnam").subscribe((res:any) => {
      //console.log(res)
      res.forEach((element:any) => {
        //console.log(element.capital)
        this.place = element.capital
        let place:any = []
        place.forEach((cap:any) => {
          this.place = cap
          console.log(this.place)
          return this.place
        });
        return this.place
      });
      return this.place
    })
    //this.capital = this.place
     console.log(this.place)
  //   this.weatherService.getWeather(`${this.place}`).subscribe((res:any) => {
  //     this.weather = res.weather
  //     this.temp = res.main.temp
  //     console.log(res)
  //     console.log(this.weather)
  //   })
    }

    ngOnChanges(): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      this.weatherService.getCapital("Vietnam").subscribe((res:any) => {
        //console.log(res)
        res.forEach((element:any) => {
          //console.log(element.capital)
          this.place = element.capital
          let place:any = []
          place.forEach((cap:any) => {
            this.place = cap
            console.log(this.place)
            return this.place
          });
          return this.place
        });
        return this.place
      })
      //this.capital = this.place
       console.log(this.place)
      
    }

}
