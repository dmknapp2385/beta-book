import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleClimbComponent } from './single-climb.component';

describe('SingleClimbComponent', () => {
  let component: SingleClimbComponent;
  let fixture: ComponentFixture<SingleClimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleClimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleClimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
