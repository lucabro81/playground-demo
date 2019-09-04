import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'plg-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  faBars = faBars;

  public isOpen: boolean;
  constructor() { }

  ngOnInit() {
  }

  public toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
