import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherScheduleComponent } from './update-teacher-schedule.component';

describe('UpdateTeacherScheduleComponent', () => {
  let component: UpdateTeacherScheduleComponent;
  let fixture: ComponentFixture<UpdateTeacherScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTeacherScheduleComponent]
    });
    fixture = TestBed.createComponent(UpdateTeacherScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
