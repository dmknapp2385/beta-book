import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClimbsComponent } from './view-climbs.component';

describe('ViewClimbsComponent', () => {
  let component: ViewClimbsComponent;
  let fixture: ComponentFixture<ViewClimbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewClimbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClimbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
