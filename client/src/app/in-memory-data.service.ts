import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Climb } from './climb';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //     const climbs = [
    //       {
    //         id: 1,
    //         name: 'Rage',
    //         grade: '13-',
    //         beta: 'Someting here aobut beta',
    //         date: new Date(2021, 1, 22),
    //         location: 'BeaverWall, Az',
    //       },
    //       {
    //         id: 2,
    //         name: 'FlyBoy',
    //         grade: '12c',
    //         beta: 'Someting here aobut beta',
    //         date: new Date(2023, 3, 28),
    //         location: 'New Wave, Az',
    //       },
    //       {
    //         id: 3,
    //         name: 'Red Tide',
    //         grade: '13-',
    //         beta: 'Someting here aobut beta',
    //         date: new Date(2021, 5, 10),
    //         location: 'Reef of Rocks, Az',
    //       },
    //       {
    //         id: 4,
    //         name: 'Sentenced to Hang',
    //         grade: '12-',
    //         beta: 'Someting here aobut beta',
    //         date: new Date(2021, 7, 22),
    //         location: 'Prison Camp, Az',
    //       },
    //     ];
    //     return { climbs };
    //   }

    //   // generate unique id for each climb
    //   genId(climbs: Climb[]): number {
    //     return climbs.length > 0
    //       ? Math.max(...climbs.map((climb) => climb._id)) + 1
    //       : 5;
    //   }

    const users = [{}];
    return { users };
  }
}
