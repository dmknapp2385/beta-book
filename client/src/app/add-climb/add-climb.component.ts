import { Component } from '@angular/core';
import { Climb } from '../climb';
import { Location } from '@angular/common';
import { ClimbDataService } from '../climb-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-climb',
  templateUrl: './add-climb.component.html',
  styleUrls: ['./add-climb.component.css'],
})
export class AddClimbComponent {
  climb = {
    name: '',
    grade: '',
    date: new Date(),
    location: '',
    beta: '',
  };

  constructor(
    private location: Location,
    private climbService: ClimbDataService, 
    private router: Router
  ) {}
  addClimb(): void {
    this.climbService
      .addClimb(this.climb as Climb)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/climbs']);
  }
}
