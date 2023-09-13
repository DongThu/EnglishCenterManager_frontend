import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungScheduleComponent } from './young-schedule.component';

describe('YoungScheduleComponent', () => {
  let component: YoungScheduleComponent;
  let fixture: ComponentFixture<YoungScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoungScheduleComponent]
    });
    fixture = TestBed.createComponent(YoungScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
