import { RegioneComponent } from './components/regione/regione.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {path:'dashboard',loadChildren:()=>import('./components/dash-board/dashboard.routing').then(mod=>mod.DashBoard)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
