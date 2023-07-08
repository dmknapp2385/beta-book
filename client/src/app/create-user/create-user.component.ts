import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  constructor() {}

  user = {
    first: '',
    last: '',
    email: '',
    username: '',
    password: '',
    confirm: '',
    _id: '',
    height: '',
    age: '',
    location: '',
  };

  securePassword = '';
  secureConfirm = '';

  newUser(): void {
    console.log(this.user);
  }

  secureInput(term: string, password?: string): void {
    if (password === 'password') {
      this.securePassword += term.at(-1);
      console.log('secure password', this.securePassword);
      this.user.password = '';
      for (let i = 0; i < term.length; i++) {
        this.user.password += '*';
      }
    } else {
      this.secureConfirm += term.at(-1);
      console.log('secure confirm', this.secureConfirm);
      this.user.confirm = '';
      for (let i = 0; i < term.length; i++) {
        this.user.confirm += '*';
      }
    }
  }
}
