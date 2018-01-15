import { Injectable, EventEmitter } from '@angular/core';

import { User } from './user.class';

@Injectable()
export class UserSessionService {

  // Events
  public onLogin = new EventEmitter<User>();
  public onLogout = new EventEmitter<User>();

  constructor() { }
  // Class Definition
  private user: User;

  // Public Methods
  get() {
    return this.user;
  }
  login(user: User) {
    this.user = user;
    this.onLogin.emit(this.user);
  }
  logout() {
    this.user = null;
    this.onLogout.emit(this.user);
  }

}
