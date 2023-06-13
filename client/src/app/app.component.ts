import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('showbutton') showbutton: ElementRef;
  // @ViewChild('hidden-menu') menu: ElementRef;
  constructor(private renderer: Renderer2) {}
  //hides dropdown initially
  hidden = true;
  //shows dropdown nav
  show = false;

  title = 'beta-book';

  //listen for click outside dropdown menu

  //shows
  showMenu(): void {
    this.hidden = false;
    this.show = true;
  }

  //closes nav bar when selecting destination
  closeNav(): void {
    console.log('close nav');
    this.hidden = true;
    this.show = false;
    console.log(this.hidden, this.show);
  }
}
