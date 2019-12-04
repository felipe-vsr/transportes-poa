import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  url

  constructor(private router: Router) { 
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe( res => {
      let result:any = res
      this.url = result.url
    })
  }

}
