import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseManagerComponent } from './user-course-manager.component';

describe('UserCourseManagerComponent', () => {
  let component: UserCourseManagerComponent;
  let fixture: ComponentFixture<UserCourseManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCourseManagerComponent]
    });
    fixture = TestBed.createComponent(UserCourseManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
