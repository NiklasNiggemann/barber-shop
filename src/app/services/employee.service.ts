import { EventEmitter, Injectable, Output } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {}

  Employees: Employee[] = [ new Employee(1, "John", "Doe") ];

  @Output() changed = new EventEmitter<Employee[]>();

  getAll() {
    return this.Employees;
  }

  getById(id: number): Employee | undefined {
    return this.Employees.find(x => x.id === id);
  }

  remove(employee: Employee) {
    const index = this.Employees.indexOf(employee);
    if (index > -1) {
      this.Employees.splice(index, 1);
      this.changed.emit(this.getAll());
    }
  }

  save(employee: Employee) {
    const index = this.Employees.findIndex(x => x.id === employee.id);
    if (index >= 0) {
      this.Employees[index] = employee;
    } else {
      const maxId = this.Employees.length > 0
        ? Math.max(...this.Employees.map(o => o.id))
        : 0;
      employee.id = maxId + 1;
      this.Employees.push(employee);
    }
    this.changed.emit(this.getAll());
  }
}
