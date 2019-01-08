import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  users: any[] = [];
  constructor() { }

  addUser(user) {
    this.users.push(user);
  }
}
