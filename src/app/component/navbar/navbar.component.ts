import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
  animate = false;
  @Output() public sidenavToggle = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleAnimate(): void {
    this.animate = !this.animate;
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
