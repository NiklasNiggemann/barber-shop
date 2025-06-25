import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../services/authorization.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login_error = false;

  constructor(private auth: AuthorizationService, private router: Router) {
    this.auth.authChanged.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
  onSubmit(email: string, password: string): void {
    console.log("Login attempt with email:", email, "and password:", password);
    this.login_error = false;
    const loggedIn = this.auth.login(email, password);
    if (!loggedIn) {
      this.login_error = true;
    }
  }
}
