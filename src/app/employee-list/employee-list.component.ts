import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  selectedEmployee?: Employee;
  isLoggedIn = false;
  isAdmin = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private auth: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getAll();
    this.employeeService.changed.subscribe(() => {
      this.employees = this.employeeService.Employees;
    });

    this.updateAuthState();
    this.auth.authChanged.subscribe(() => {
      this.updateAuthState();
    });
  }

  private updateAuthState(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.isAdmin = this.auth.isAdmin();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  onDelete(): void {
    if (this.selectedEmployee && this.isAdmin) {
      this.employeeService.remove(this.selectedEmployee);
    }
  }

  onEdit(): void {
    if (this.selectedEmployee && this.isLoggedIn) {
      this.router.navigate(['/employees', this.selectedEmployee.id]);
    }
  }

  onRequest() : void {
    this.router.navigate(['/appointments/request']);
  }

  onAdd(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/employees/0']);
    }
  }

  isSelected(): boolean {
    return !!this.selectedEmployee;
  }
}
