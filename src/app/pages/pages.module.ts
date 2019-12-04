import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { BusComponent } from './bus/bus.component';
import { MicroBusComponent } from './micro-bus/micro-bus.component';

@NgModule({
  declarations: [HomeComponent, BusComponent, MicroBusComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
