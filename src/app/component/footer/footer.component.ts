import {Component, NgZone, OnInit} from '@angular/core';
import {SMALL_WIDTH_BREAKPOINT} from '../../app.module';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
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
