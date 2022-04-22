import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRenderedComponent } from './dashboard-rendered/dashboard-rendered.component';

console.warn("cai nay da duoc load")
const routes: Routes = [
  {path:'',component:DashboardRenderedComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoard { }
