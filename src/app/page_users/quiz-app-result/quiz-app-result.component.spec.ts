import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAppResultComponent } from './quiz-app-result.component';

describe('QuizAppResultComponent', () => {
  let component: QuizAppResultComponent;
  let fixture: ComponentFixture<QuizAppResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizAppResultComponent]
    });
    fixture = TestBed.createComponent(QuizAppResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
