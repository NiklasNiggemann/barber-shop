import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app.routes';

@Component({
  selector: 'app-employee-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {

  id!: number;
	employee!: Employee;

	constructor(private router: Router, private employeeService: EmployeeService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
  
		if (this.id != 0) {
      this.employee = this.employeeService.getById(this.id)!;
    } else { 
      this.employee = new Employee(0,"", "");
    }

    this.form.setValue({
      "name": this.employee.name,
      "surname": this.employee.surname
    })
  }
  
  form = new FormGroup({
    name: new FormControl(),
    surname: new FormControl()
  });

	onSubmit() {
    this.employee = new Employee(this.id, this.form.controls.name.value, this.form.controls.surname.value);
    this.employeeService.save(this.employee);
    this.router.navigate(["employees"]);
	}

  onCancel() { 
    this.router.navigate(["employees"]); 
  }

}
