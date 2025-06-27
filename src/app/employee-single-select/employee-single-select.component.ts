import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-employee-single-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-single-select.component.html',
  styleUrls: ['./employee-single-select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmployeeSingleSelectComponent),
      multi: true
    }
  ]
})
export class EmployeeSingleSelectComponent implements OnInit, ControlValueAccessor {

  constructor(private service: EmployeeService) {}

  @Input() selected: Employee = new Employee(0, '', '');
  all: Employee[] = [];

  ngOnInit(): void {
    this.all = this.service.getAll();
  }

  onSelectionChanged(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const selectedId = Number(select.value);
    const employee = this.all.find(e => e.id === selectedId);
    if (employee) {
      this.selected = employee;
      this.onChange(employee);
      this.onTouched();
    }
  }

  onChange: (employee: Employee | null) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(employee: Employee): void {
    this.selected = employee;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  isSelected(employee: Employee): boolean {
    return this.selected != null && this.selected.id === employee.id;
  }
}
