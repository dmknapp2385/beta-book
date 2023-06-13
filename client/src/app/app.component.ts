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
      transition('open <=> close', animate('1s ease-out')),
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

      transition('close <=> open', animate('1s ease-out')),
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
      transition('open <=> close', animate('1s ease-out')),
    ]),
  ],
})
export class AppComponent {
  //hides dropdown initially
  hidden = true;
  //shows dropdown nav
  show = false;

  state = 'close';

  title = 'beta-book';

  //shows
  showMenu(): void {
    this.hidden = false;
    this.show = true;
  }

  animateMenu(): void {
    this.state = this.state === 'open' ? 'close' : 'open';
  }

  //closes nav bar when selecting destination
  closeNav(): void {
    console.log('close nav');
    this.hidden = true;
    this.show = false;
    console.log(this.hidden, this.show);
  }
}
