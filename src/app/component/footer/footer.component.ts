import {Component, NgZone, OnInit} from '@angular/core';
import {Globals} from '../../globals';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  globals: Globals;


  constructor(zone: NgZone, globals: Globals) {
    this.globals = globals;
  }

  ngOnInit(): void {
  }


}
