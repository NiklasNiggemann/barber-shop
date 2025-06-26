import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-appointment-list',
  imports: [CommonModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  constructor(private appointmentService: AppointmentService, private router: Router, private auth: AuthorizationService) { }

  appointments: any[] = [];
  selectedAppointment?: any;
  isLoggedIn = false;
  isAdmin = false;

  async ngOnInit() {
    this.appointments = this.appointmentService.getAll(); 
    this.appointmentService.changed.subscribe(() => { this.appointments = this.appointmentService.Appointments; });

    this.updateAuthState();
    this.auth.authChanged.subscribe(() => {
      this.updateAuthState();
    });

    this.isLoggedIn = this.auth.isLoggedIn();
    this.isAdmin = this.auth.isAdmin();
  }

  private updateAuthState(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.isAdmin = this.auth.isAdmin();
  }

  onDelete() { this.appointmentService.remove(this.selectedAppointment); }

  onSelect(appointment: Appointment) { this.selectedAppointment = appointment; }

  onEdit() { this.router.navigate(['/appointments', this.selectedAppointment.id]); }

  isSelected(): boolean { return true; }

  onAdd() { this.router.navigate(['/appointments/0']); }
}
