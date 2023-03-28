import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Climb } from './climb';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const climbs = [
      {
        name: 'Rage',
        grade: '13-',
        beta: 'Someting here aobut beta',
        date: new Date(2021, 1, 22),
        location: 'BeaverWall, Az',
      },
      {
        name: 'FlyBoy',
        grade: '12c',
        beta: 'Someting here aobut beta',
        date: new Date(2023, 3, 28),
        location: 'New Wave, Az',
      },
      {
        name: 'Red Tide',
        grade: '13-',
        beta: 'Someting here aobut beta',
        date: new Date(2021, 5, 10),
        location: 'Reef of Rocks, Az',
      },
      {
        name: 'Sentenced to Hang',
        grade: '12-',
        beta: 'Someting here aobut beta',
        date: new Date(2021, 7, 22),
        location: 'Prison Camp, Az',
      },
    ];
    return { climbs };
  }
}
