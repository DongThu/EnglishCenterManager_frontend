import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicScheduleComponent } from './basic-schedule.component';

describe('BasicScheduleComponent', () => {
  let component: BasicScheduleComponent;
  let fixture: ComponentFixture<BasicScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicScheduleComponent]
    });
    fixture = TestBed.createComponent(BasicScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
