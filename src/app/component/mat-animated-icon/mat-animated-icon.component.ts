import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mat-animated-icon',
  templateUrl: './mat-animated-icon.component.html',
  styleUrls: ['./mat-animated-icon.component.scss']
})
export class MatAnimatedIconComponent implements OnInit {

  @Input() start: string;
  @Input() end: string;
  @Input() colorStart: string;
  @Input() colorEnd: string;
  @Input() animate: boolean;
  @Input() animateFromParent ? = false;

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.colorStart);
    // console.log(this.colorEnd);
  }

  toggle(): void {
    if (!this.animateFromParent) {
      this.animate = !this.animate;
    }
  }
}
