import { Component } from '@angular/core';
import { CVComponent } from 'app/components';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements CVComponent {
}
