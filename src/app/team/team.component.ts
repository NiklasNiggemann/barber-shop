import { Component } from '@angular/core';
import { EmployeeListComponent } from "../employee-list/employee-list.component";

@Component({
  selector: 'app-team',
  imports: [EmployeeListComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
