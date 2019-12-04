import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BusComponent } from './bus/bus.component';
import { MicroBusComponent } from './micro-bus/micro-bus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'onibus', component: BusComponent },
  { path: 'lotacao', component: MicroBusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
