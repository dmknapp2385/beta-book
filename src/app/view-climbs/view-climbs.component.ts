import { Component } from '@angular/core';
import { Climb } from '../climb';
import { ClimbDataService } from '../climb-data.service';

@Component({
  selector: 'app-view-climbs',
  templateUrl: './view-climbs.component.html',
  styleUrls: ['./view-climbs.component.css'],
})
export class ViewClimbsComponent {
  climbs: Climb[] = [];
  constructor(private climbService: ClimbDataService) {}
  ngOnInit(): void {
    this.getClimbs();
  }

  getClimbs() {
    this.climbService.getClimbs().subscribe((climbs) => (this.climbs = climbs));
  }

  
}
