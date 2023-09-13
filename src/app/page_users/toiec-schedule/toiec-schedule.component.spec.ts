import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiecScheduleComponent } from './toiec-schedule.component';

describe('ToiecScheduleComponent', () => {
  let component: ToiecScheduleComponent;
  let fixture: ComponentFixture<ToiecScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToiecScheduleComponent]
    });
    fixture = TestBed.createComponent(ToiecScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
