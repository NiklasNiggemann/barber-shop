import { Employee } from "./employee";

export class Appointment {
  id: number;
  date: Date;
  customerName: string;
  serviceType: string;
  employee?: Employee;

  constructor(id: number, date: Date, customerName: string, serviceType: string, employee?: Employee) {
    this.id = id;
    this.date = date;
    this.customerName = customerName;
    this.serviceType = serviceType;
    this.employee = employee;
  }
}