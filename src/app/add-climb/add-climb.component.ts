import { Component } from '@angular/core';
import { Climb } from '../climb';

@Component({
  selector: 'app-add-climb',
  templateUrl: './add-climb.component.html',
  styleUrls: ['./add-climb.component.css']
})
export class AddClimbComponent {
  climb = {
    name:'', 
    grade: '', 
    location: '', 
    beta: '', 
  }

  //form control
  isValid = false;
}
