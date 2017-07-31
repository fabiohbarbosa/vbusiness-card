import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Route } from 'app/models';
import * as c from 'app/components';

@Injectable()
export class RouteProvider {
  private router: Router;

  static appRoutes() {
    return [
      { path: 'profile',  component: c.ProfileComponent },
      { path: 'work',     component: c.ProfileComponent },
      { path: 'resume',   component: c.ProfileComponent },
      { path: 'blog',     component: c.ProfileComponent },
      { path: 'contact',  component: c.ProfileComponent }
    ];
  }

  constructor(router: Router) {
    this.router = router;
  }

  public go(path: string): void {
    this.router.navigateByUrl(path);
  }

}
