import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimetableSalaryComponent } from './list-timetable-salary.component';

describe('ListTimetableSalaryComponent', () => {
  let component: ListTimetableSalaryComponent;
  let fixture: ComponentFixture<ListTimetableSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTimetableSalaryComponent]
    });
    fixture = TestBed.createComponent(ListTimetableSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
