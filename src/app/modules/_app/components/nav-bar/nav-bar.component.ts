import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: '<div class="container"><a [routerLink]="[\'start\']"><app-svg-icon icon="logo"></app-svg-icon></a></div>',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
