import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamStudentResultComponent } from './exam-student-result.component';

describe('ExamStudentResultComponent', () => {
  let component: ExamStudentResultComponent;
  let fixture: ComponentFixture<ExamStudentResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamStudentResultComponent]
    });
    fixture = TestBed.createComponent(ExamStudentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
