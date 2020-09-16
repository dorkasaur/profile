import {Component, NgZone, OnInit} from '@angular/core';
import {Globals} from '../../globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  globals: Globals;
  private mediaMatcher: MediaQueryList;

  constructor(zone: NgZone, globals: Globals) {
    this.globals = globals;


  }

  ngOnInit(): void {
  }


}
