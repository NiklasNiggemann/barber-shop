import { Component } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  
  constructor(private auth: AuthorizationService) {}

  is_logged_in = false; 
  is_admin = false;
  
  ngOnInit() { 
    this.auth.authChanged.subscribe(() => {
      this.is_logged_in = this.auth.isLoggedIn();
      this.is_admin = this.auth.isAdmin();
    });
    this.is_logged_in = this.auth.isLoggedIn();
    this.is_admin = this.auth.isAdmin();
  }

  logout() { this.auth.logout(); }
}
