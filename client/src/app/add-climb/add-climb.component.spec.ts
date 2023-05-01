import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClimbComponent } from './add-climb.component';

describe('AddClimbComponent', () => {
  let component: AddClimbComponent;
  let fixture: ComponentFixture<AddClimbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClimbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
