import { Component, OnInit, HostBinding, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { Animation } from './../_shared/animations/animations';
import { CLIENT_PATHS } from '../../config/paths';
import { User } from '../_shared/services/user-session/user.class';
import { UserSessionService } from '../_shared/services/user-session/user-session.service';

const animationTime = 400;
const fadeUpDown = Animation.fadeUpDown(animationTime);
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [ fadeUpDown ]
})

export class StartComponent implements OnInit {
  // Class Definition
  @HostBinding('class.stage') stage = true;
  @HostBinding('class.fade') fade = false;

  public buttonAnimationState = 'down';
  public logoAnimationState = 'up';

  constructor(
    private router: Router,
    private userSessionService: UserSessionService
  ) { }

  // Methods Definition
  leaveStart() {
    this.buttonAnimationState = 'down';
    this.logoAnimationState = 'up';
    this.fade = true;
  }

  enterStart() {
    setTimeout( () => {
    this.buttonAnimationState = 'default';
    this.logoAnimationState = 'default';
    }, animationTime);
  }

  login(user?: User) {
    this.userSessionService.login(user || new User('Anônimo'));
  }

  enterApp() {
    this.leaveStart();
    setTimeout( () => {
      this.router.navigate([CLIENT_PATHS.FLEET]);
    }, animationTime);
  }

  // Init Component
  ngOnInit() {
    this.userSessionService.logout();
    this.enterStart();
    this.userSessionService.onLogin.subscribe((user: User) => {
      this.leaveStart();
      this.enterApp();
    });
  }
}
