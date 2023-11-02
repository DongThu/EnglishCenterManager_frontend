import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerQuizComponent } from './manager-quiz.component';

describe('ManagerQuizComponent', () => {
  let component: ManagerQuizComponent;
  let fixture: ComponentFixture<ManagerQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerQuizComponent]
    });
    fixture = TestBed.createComponent(ManagerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
