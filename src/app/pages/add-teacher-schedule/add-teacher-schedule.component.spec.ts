import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherScheduleComponent } from './add-teacher-schedule.component';

describe('AddTeacherScheduleComponent', () => {
  let component: AddTeacherScheduleComponent;
  let fixture: ComponentFixture<AddTeacherScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTeacherScheduleComponent]
    });
    fixture = TestBed.createComponent(AddTeacherScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
