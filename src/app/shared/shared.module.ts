import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/modal/modal.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';

@NgModule({
  declarations: [
    LoadingComponent, 
    HeaderComponent, 
    TableComponent, 
    ModalComponent, 
    ItineraryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule 
  ],
  exports: [
    FormsModule,
    LoadingComponent,
    HeaderComponent,
    TableComponent,
    ModalComponent,
    ItineraryComponent
  ]
})
export class SharedModule { }
