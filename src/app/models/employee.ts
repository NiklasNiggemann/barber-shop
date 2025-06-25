export class Employee {
  id: number;
  name: string;
  surname: string;
  email: string;

  constructor(id: number, name: string, surname: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = name.toLowerCase() + "." + surname.toLowerCase() + "@barber.com";
  }
}