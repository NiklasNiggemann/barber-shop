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
  private users: { email: string, password: string, isAdmin: boolean }[] = [
    { email: 'test', password: 'test', isAdmin: false },
    { email: 'admin', password: 'admin', isAdmin: true }
  ];

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
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      this.setAuthState(true, user.isAdmin);
      return user.isAdmin ? AuthResult.Admin : AuthResult.User;
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

  registerUser(email: string, password: string, isAdmin = false): void {
    this.users.push({ email, password, isAdmin });
    console.log(this.users);
  }
}
