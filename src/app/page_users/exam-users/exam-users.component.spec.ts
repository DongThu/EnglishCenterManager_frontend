import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamUsersComponent } from './exam-users.component';

describe('ExamUsersComponent', () => {
  let component: ExamUsersComponent;
  let fixture: ComponentFixture<ExamUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamUsersComponent]
    });
    fixture = TestBed.createComponent(ExamUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
