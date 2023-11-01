import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAppResultTestComponent } from './quiz-app-result-test.component';

describe('QuizAppResultTestComponent', () => {
  let component: QuizAppResultTestComponent;
  let fixture: ComponentFixture<QuizAppResultTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizAppResultTestComponent]
    });
    fixture = TestBed.createComponent(QuizAppResultTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
