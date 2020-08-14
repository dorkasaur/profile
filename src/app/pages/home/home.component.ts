import {Component, NgZone, OnInit} from '@angular/core';
import {SMALL_WIDTH_BREAKPOINT} from '../../app.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private mediaMatcher: MediaQueryList = window.matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  constructor(zone: NgZone) {
    this.mediaMatcher.addEventListener('change', () => {
      this.isSmallScreen();
    });
  }
  ngOnInit(): void {
  }



  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }


}
