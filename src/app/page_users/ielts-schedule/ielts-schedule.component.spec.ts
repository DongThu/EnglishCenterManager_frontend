import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltsScheduleComponent } from './ielts-schedule.component';

describe('IeltsScheduleComponent', () => {
  let component: IeltsScheduleComponent;
  let fixture: ComponentFixture<IeltsScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IeltsScheduleComponent]
    });
    fixture = TestBed.createComponent(IeltsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
