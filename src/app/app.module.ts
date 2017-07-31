import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import * as c from 'app/components';
import { Route } from 'app/models';

@NgModule({
  imports: [
    RouterModule.forRoot(Route.appRoutes()),
    BrowserModule
  ],
  declarations: [
    c.NavigationComponent,
    c.ProfileComponent,
    c.FooterComponent,
    c.AppComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [c.AppComponent]
})
export class AppModule { }
