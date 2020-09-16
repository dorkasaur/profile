import {Injectable, NgZone} from '@angular/core';

@Injectable()
export class Globals {
  private SMALL_WIDTH_BREAKPOINT = 600;
  private mediaMatcher: MediaQueryList;

  constructor(zone: NgZone) {
    this.mediaMatcher = window.matchMedia(`(max-width: ${this.SMALL_WIDTH_BREAKPOINT}px)`);
    this.mediaMatcher.addEventListener('change', () => {
      this.isSmallScreen();
    });
  }

  isSmallScreen(): boolean {
    return this.mediaMatcher.matches;
  }
}
