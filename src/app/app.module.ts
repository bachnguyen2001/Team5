import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HeaderComponent } from './components/header/header.component';
import { RegioneComponent } from './components/regione/regione.component';
import { WorldwideComponent } from './components/worldwide/worldwide.component';
import { DashboardRenderedComponent } from './components/dash-board/dashboard-rendered/dashboard-rendered.component';
import { LineChartComponent } from './components/regione/line-chart/line-chart.component';
import { MapComponent } from './components/regione/map/map.component';
import { RegionalListComponent } from './components/regione/regional-list/regional-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HeaderComponent,
    RegioneComponent,
    WorldwideComponent,
    DashboardRenderedComponent,
    LineChartComponent,
    MapComponent,
    RegionalListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
