import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Route } from 'app/models';

@Injectable()
export class RouteProvider {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public go(path: string): void {
    this.router.navigateByUrl(path);
  }

}
