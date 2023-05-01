import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbEditComponent } from './climb-edit.component';

describe('ClimbEditComponent', () => {
  let component: ClimbEditComponent;
  let fixture: ComponentFixture<ClimbEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimbEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
