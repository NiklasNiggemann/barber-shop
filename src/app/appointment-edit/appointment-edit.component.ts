import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeSingleSelectComponent } from "../employee-single-select/employee-single-select.component";
import { ServiceSingleSelectComponent } from '../service-single-select/service-single-select.component';

@Component({
  selector: 'app-appointment-edit',
  imports: [ReactiveFormsModule, CommonModule, EmployeeSingleSelectComponent, ServiceSingleSelectComponent],
  templateUrl: './appointment-edit.component.html',
  styleUrl: './appointment-edit.component.css'
})
export class AppointmentEditComponent {

  id!: number;
	appointment!: Appointment;
  form!: FormGroup;

	constructor(private router: Router, private appointmentService: AppointmentService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
  
		if (this.id != 0) {
      this.appointment = this.appointmentService.getById(this.id)!;
    } else { 
      this.appointment = new Appointment(0, null, "", null);
    }

    this.form = new FormGroup({
      customerName: new FormControl(this.appointment.customerName, [Validators.required, Validators.minLength(3)]),
      serviceType: new FormControl(this.appointment.serviceType, [Validators.required]),
      date: new FormControl(this.appointment.date, [Validators.required]),
      employee: new FormControl(this.appointment.employee, [Validators.required]) 
    });
  }

	onSubmit() {
		this.appointment.customerName = this.form.controls['customerName'].value!;
    this.appointment.serviceType = this.form.controls['serviceType'].value!;
    this.appointment.date = this.form.controls['date'].value!;
    this.appointment.employee = this.form.controls['employee'].value!;
    this.appointmentService.save(this.appointment);
    this.router.navigate(["appointments"]);
	}

  onCancel() { 
    this.router.navigate(["appointments"]); 
  }
}
