import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCourseComponent } from './exam-course.component';

describe('ExamCourseComponent', () => {
  let component: ExamCourseComponent;
  let fixture: ComponentFixture<ExamCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamCourseComponent]
    });
    fixture = TestBed.createComponent(ExamCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
