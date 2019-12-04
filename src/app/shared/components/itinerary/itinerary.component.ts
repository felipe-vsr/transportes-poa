import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {

  @Input() data

  constructor() { }

  ngOnInit() {
  }

  parseInt(val:string) {
    return Number(val)
  }

  orderByRowNum = (a,b) => {
    return a
  }

}
