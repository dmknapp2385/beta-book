import { TestBed } from '@angular/core/testing';

import { ClimbDataService } from './climb-data.service';

describe('ClimbDataService', () => {
  let service: ClimbDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimbDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
