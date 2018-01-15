import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { UserSessionService } from '../_shared/services/user-session/user-session.service';
import { User } from '../_shared/services/user-session/user.class';
import { Animation } from '../_shared/animations/animations';

const animationTime = 400;
const fadeUpDown = Animation.fadeUpDown(animationTime);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fadeUpDown ]
})
export class AppComponent implements OnInit {

  public showNavBar = false;

  constructor(
    private userSessionService: UserSessionService
  ) { }

  ngOnInit() {
    this.userSessionService.onLogin.subscribe((e: User) => {
      setTimeout(() => this.showNavBar = true);
    });

    this.userSessionService.onLogout.subscribe((e: User) => {
      setTimeout(() => this.showNavBar = false);
    });
  }

}
