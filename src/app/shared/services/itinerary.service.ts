import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ItineraryService {

  constructor(private http: HttpClient) { }

  get(id) {
    return this.http.get('http://54.39.20.13:8000/itinerario/' +  id);
  }

}
