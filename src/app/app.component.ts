import {Component, NgZone} from '@angular/core';
import {Globals} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile';

  private globals: Globals;

  constructor(zone: NgZone, globals: Globals) {
    this.globals = globals;
  }
}
