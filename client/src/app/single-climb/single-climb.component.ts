import { Component, OnInit } from '@angular/core';
import { Climb } from '../climb';
import { ClimbDataService } from '../climb-data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-climb',
  templateUrl: './single-climb.component.html',
  styleUrls: ['./single-climb.component.css'],
})
export class SingleClimbComponent implements OnInit {
  climb?: Climb;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private climbService: ClimbDataService
  ) {}

  ngOnInit() {
    this.getClimb();
  }

  getClimb(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log(id, 'from get climb single')
    this.climbService.getClimb(id).subscribe((climb) => (this.climb = climb));
  }

  goBack() {
    this.location.back()
  }
}
