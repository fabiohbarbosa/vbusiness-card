import { Component, OnInit } from '@angular/core';
import { CVComponent } from 'app/components';
import { Route } from 'app/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements CVComponent, OnInit {
  routes: Route[];

  ngOnInit(): void {
    this.routes = Route.routes();
  }

}
