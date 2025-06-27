import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getAll() {
    return [
      { id: 1, name: 'Haircut', price: 20 },
      { id: 2, name: 'Shave', price: 15 },
      { id: 3, name: 'Beard Trim', price: 10 }
    ];
  }

}
