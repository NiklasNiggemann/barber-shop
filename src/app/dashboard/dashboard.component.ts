import { Component } from '@angular/core';
import { AppointmentListComponent } from "../appointment-list/appointment-list.component";

@Component({
  selector: 'app-dashboard',
  imports: [AppointmentListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
