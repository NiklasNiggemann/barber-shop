import { EventEmitter, Injectable, Output } from '@angular/core';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  Appointments: Appointment[] = [];

  @Output() changed = new EventEmitter();

  getAll() {
    return this.Appointments;
  }

  getById(id: number) {
    return this.Appointments.find(x => x.id === id);
  }

  remove(appointment: Appointment) {
    const index = this.Appointments.indexOf(appointment);
    if (index > -1) {
      this.Appointments.splice(index, 1);
      this.changed.emit();
    }
  }

  save(appointment: Appointment) {
    let index = this.Appointments.findIndex(x =>x.id ==appointment.id);
    if (index >= 0) {
      this.Appointments[index]=appointment;
    } else {
      let new_id =Math.max.apply(Math, this.Appointments.map(function(o) { return o.id; }))+ 1;
      appointment.id =new_id;
      this.Appointments.push(appointment);
    }
    this.changed.emit(this.getAll());
  }

}
