import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

import { ChartServiceService } from 'src/app/services/chart-service.service';
import { RegionServicesService } from 'src/app/services/region-services.service';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input('data') countryCode = '';
  chart!: Chart;
  list: any;
  selectedAll = true;
  selected10days = false;
  lineChart=true;
  constructor(
    private chartService: ChartServiceService,
    private regService: RegionServicesService
  ) {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    this.chartService
      .getDataChartCountry(this.countryCode)
      .subscribe((param) => {
        this.list = param;
        this.drawLineChartByData();
      });
  }
  ngOnChanges() {
    this.chartService
      .getDataChartCountry(this.countryCode)
      .subscribe((param) => {
        this.list = param;

        this.drawLineChartByData();
      });
  }
  drawLineChartByData() {
    this.chart?.destroy();
    let dates = this.chartService.getDate(
      this.chartService.sortObject(this.list[0].timeseries)
    );
    let allCases = this.chartService.getCases(
      this.chartService.sortObject(this.list[0].timeseries)
    );

    if (!this.selectedAll) {
      dates = this.chartService.get10DaysAgo(
        this.chartService.sortObject(this.list[0].timeseries)
      );
      allCases = this.chartService.getCase10DaysAgo(
        this.chartService.sortObject(this.list[0].timeseries)
      );
    }
 
    let confirmedCases = this.regService.confirmedCase(allCases);
    let recoverCases = this.regService.recoverCase(allCases);
    let deathsCases = this.regService.deathCase(allCases);
    this.chart = new Chart('canvas', {
      type: 'line',

      data: {
        labels: dates,
        datasets: [
          {
            label: 'Confirmed',
            data: confirmedCases,
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
            hoverBackgroundColor: 'white',
            pointRadius:0,
          },
          {
            label: 'Recovered',
            backgroundColor: 'green',
            borderColor: 'green',
            data: recoverCases,
            fill: false,
            hoverBackgroundColor: 'white',
            pointRadius:0
          },
          {
            label: 'Deaths',
            data: deathsCases,
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
            hoverBackgroundColor: 'white',
            pointRadius:0
          },
        ],
      },
      options: {
        interaction: {
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Covid chart',
            color: 'black',
           font:{
             weight:'bold'
           }
          },

          legend: {
            position: 'bottom',
            labels: {
              color: 'black',
              usePointStyle:false
            },
            
          },
        },

      },
      
    });
  }

  showLine(){
    this.lineChart=true;
    if(this.lineChart==true){
      this.drawLineChartByData()
    }
  }
  showBar(){
    this.lineChart=false;
    if(this.lineChart==false){
      this.drawBarChartByData()
    }
  }
  selectAll() {
    this.selectedAll = true;
    this.selected10days = false;
    if(this.lineChart==true){
 
      this.drawLineChartByData();
      }else{
        this.drawBarChartByData();
      }
    
  }
  select10days() {
    this.selectedAll = false;
    this.selected10days = true;
    if(this.lineChart==true){
 
    this.drawLineChartByData();
    }else{
      this.drawBarChartByData();
    }
    
  }

  drawBarChartByData() {
    this.chart?.destroy();
    let dates = this.chartService.getDate(
      this.chartService.sortObject(this.list[0].timeseries)
    );
    let allCases = this.chartService.getCases(
      this.chartService.sortObject(this.list[0].timeseries)
    );

    if (!this.selectedAll) {
      dates = this.chartService.get10DaysAgo(
        this.chartService.sortObject(this.list[0].timeseries)
      );
      allCases = this.chartService.getCase10DaysAgo(
        this.chartService.sortObject(this.list[0].timeseries)
      );
    }
 
    let confirmedCases = this.regService.confirmedCase(allCases);
    let recoverCases = this.regService.recoverCase(allCases);
    let deathsCases = this.regService.deathCase(allCases);
    this.chart = new Chart('canvas', {
      type: 'bar',

      data: {
        labels: dates,
        datasets: [
          {
            label: 'Confirmed',
            data: confirmedCases,
            backgroundColor: 'blue',
            borderColor: 'blue',         
            hoverBackgroundColor: 'white',
          },
          {
            label: 'Recovered',
            backgroundColor: 'green',
            borderColor: 'green',
            data: recoverCases,
            hoverBackgroundColor: 'white',
          },
          {
            label: 'Deaths',
            data: deathsCases,
            backgroundColor: 'red',
            borderColor: 'red',
            hoverBackgroundColor: 'white',
          },
        ],
      },
      options: {
        interaction: {
          intersect: false,
        },
        plugins: {
          title: {
            display: true,
            text: 'Covid chart',
            color: 'black',
           font:{
             weight:'bold'
           }
          },

          legend: {
            position: 'bottom',
            labels: {
              color: 'black',
              usePointStyle:false
            },
            
          },
        },

      },
      
    });
  }
}
