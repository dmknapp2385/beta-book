import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  passwordVerified = false;

  user = {
    first: '',
    last: '',
    email: '',
    username: '',
    password: '',
    _id: '',
    height: '',
    age: '',
    location: '',
  };

  createUser(): void {
    console.log(this.user);
  }

  verify(event: any): void {
    console.log(event.target.value);
  }
}
