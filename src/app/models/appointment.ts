import { Employee } from "./employee";
import { Service } from "./service";

export class Appointment {
  id: number;
  date: Date | null;
  customerName: string;
  serviceType: Service | null;
  employee?: Employee;

  constructor(id: number, date: Date | null, customerName: string, serviceType: Service | null, employee?: Employee) {
    this.id = id;
    this.date = date;
    this.customerName = customerName;
    this.serviceType = serviceType;
    this.employee = employee;
  }
}