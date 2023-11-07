import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSalaryComponent } from './timetable-salary.component';

describe('TimetableSalaryComponent', () => {
  let component: TimetableSalaryComponent;
  let fixture: ComponentFixture<TimetableSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimetableSalaryComponent]
    });
    fixture = TestBed.createComponent(TimetableSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
