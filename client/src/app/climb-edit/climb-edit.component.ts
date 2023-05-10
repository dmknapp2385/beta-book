import { Component, OnInit } from '@angular/core';
import { Climb } from '../climb';
import { ClimbDataService } from '../climb-data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-climb-edit',
  templateUrl: './climb-edit.component.html',
  styleUrls: ['./climb-edit.component.css'],
})
export class ClimbEditComponent {
  climb?: Climb;

  hidden: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private climbService: ClimbDataService
  ) {}

  ngOnInit(): void {
    this.getClimb();
  }

  getClimb(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.climbService.getClimb(id).subscribe((climb) => (this.climb = climb));
  }

  save(): void {
    console.log(this.climb);

    this.climbService
      .updateClimb(this.climb as Climb)
      .subscribe(() => this.goBack());
  }

  show(): void {
    this.hidden = false;
  }

  goBack(): void {
    this.location.back();
  }
}
