import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamCourseComponent } from './add-exam-course.component';

describe('AddExamCourseComponent', () => {
  let component: AddExamCourseComponent;
  let fixture: ComponentFixture<AddExamCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExamCourseComponent]
    });
    fixture = TestBed.createComponent(AddExamCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
