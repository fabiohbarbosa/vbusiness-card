import { Component } from '@angular/core';
import { CVComponent } from 'app/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements CVComponent {
}
