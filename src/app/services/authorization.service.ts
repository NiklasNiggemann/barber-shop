import { EventEmitter, Injectable } from '@angular/core';

export enum AuthResult {
  None,
  User,
  Admin
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private readonly credentials = {
    user: { email: 'test', password: 'test' },
    admin: { email: 'admin', password: 'admin' }
  };

  private loggedIn = false;
  private isAdminUser = false;

  readonly authChanged = new EventEmitter<boolean>();

  constructor() {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  isAdmin(): boolean {
    return this.isAdminUser;
  }

  login(email: string, password: string): AuthResult {
    if (email === this.credentials.user.email && password === this.credentials.user.password) {
      this.setAuthState(true, false);
      return AuthResult.User;
    }

    if (email === this.credentials.admin.email && password === this.credentials.admin.password) {
      this.setAuthState(true, true);
      return AuthResult.Admin;
    }

    this.logout();
    return AuthResult.None;
  }

  logout(): void {
    this.setAuthState(false, false);
  }

  private setAuthState(loggedIn: boolean, isAdmin: boolean): void {
    this.loggedIn = loggedIn;
    this.isAdminUser = isAdmin;
    this.authChanged.emit(loggedIn);
  }
}
