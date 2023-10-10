import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableTeacherComponent } from './time-table-teacher.component';

describe('TimeTableTeacherComponent', () => {
  let component: TimeTableTeacherComponent;
  let fixture: ComponentFixture<TimeTableTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeTableTeacherComponent]
    });
    fixture = TestBed.createComponent(TimeTableTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
