import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LinesService {

  constructor(private http: HttpClient) { }

  getNormalLines() {
    return this.http.get('http://54.39.20.13:8000/linhas');
  }
  
  getMicroBus() {
    return this.http.get('http://54.39.20.13:8000/lotacao');
  }

}
