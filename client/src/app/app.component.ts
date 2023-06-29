import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('line1', [
      state(
        'close',
        style({
          backgroundColor: 'var(--dark)',
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'open',
        style({
          backgroundColor: 'var(--neutral)',
          transform: 'rotate(45deg)',
        })
      ),

      // transition element from small style to large style in 300ms with ease-in (slow to fast)
      transition('open <=> close', animate('.5s ease-out')),
    ]),
    trigger('line2', [
      state(
        'close',
        style({
          backgroundColor: 'var(--dark)',
          transform: 'matrix(1.00,0.00,0.00,1.00,0,0)',
        })
      ),
      state(
        'open',
        style({
          backgroundColor: 'var(--neutral)',
          transform: 'matrix(0.71,-0.71,0.71,0.71,0 ,-11)',
        })
      ),

      transition('close <=> open', animate('.5s ease-out')),
    ]),
    trigger('line3', [
      state(
        'close',
        style({
          backgroundColor: 'var(--dark)',
          opacity: 1,
        })
      ),
      state(
        'open',
        style({
          opacity: 0,
        })
      ),

      // transition element from small style to large style in 300ms with ease-in (slow to fast)
      transition('open <=> close', animate('.5s ease-out')),
    ]),
    trigger('mobileMenu', [
      state(
        'close',
        style({
          opacity: 0,
          transform: 'translateX(-1000px)',
        })
      ),
      state(
        'open',
        style({
          opacity: 1,
        })
      ),

      // transition element from small style to large style in 300ms with ease-in (slow to fast)
      transition('open <=> close', animate('.5s ease-out')),
    ]),
  ],
})
export class AppComponent {
  title = 'beta-book';

  //state of mobile dropdown menu
  state = 'close';

  //if user is logged in
  loggedIn = true;

  //remove after functionality added
  login(): void {
    this.loggedIn = true;
  }
  //log out function
  logout(): void {
    this.loggedIn = false;
  }

  //mobile web menu animations
  animateMenu(): void {
    this.state = this.state === 'open' ? 'close' : 'open';
  }

  //closes nav bar when selecting destination on mobile view
  closeNav(): void {
    this.state = 'close';
  }

  mobileLogout(): void {
    this.closeNav();
    this.logout();
  }

  mobileLogin(): void {
    this.closeNav();
    this.login();
  }
}
