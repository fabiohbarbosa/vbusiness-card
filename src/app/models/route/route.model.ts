import { CVComponent } from 'app/components';
import { Routes } from '@angular/router';

import * as c from 'app/components';
import * as _ from 'lodash';

export class Route {
  name: string;
  path: string;
  icon: string;
  component: CVComponent;

  static routes() {
    const routes = new Array<Route>();

    routes.push(new Route('Profile', 'profile', 'fa fa-user', c.ProfileComponent));
    routes.push(new Route('Work', 'work', 'fa fa-briefcase', c.ProfileComponent));
    routes.push(new Route('Resume', 'resume', 'fa fa-file-text', c.ProfileComponent));
    routes.push(new Route('Blog', 'blog', 'fa fa-comment', c.ProfileComponent));
    routes.push(new Route('Contact', 'contact', 'fa fa-envelope', c.ProfileComponent));

    return routes;
  }

  static appRoutes() {
    const routes = [];
    _.forEach(Route.routes(), r => {
      routes.push({
        path: r.path,
        component: r.component
      });
    });
    return routes;
  }

  constructor(name: string, path: string, icon: string, component: CVComponent) {
    this.name = name;
    this.path = path;
    this.icon = icon;
    this.component = component;
  }

}
