import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  securePassword = '';

  login(): void {
    this.user.password = this.securePassword; 
    console.log(this.user);
  }

  secureInput(term: string): void {
    this.securePassword += term.at(-1);
    this.user.password = '';
    for (let i = 0; i < term.length; i++) {
      this.user.password += '*';
    }
  }
}
