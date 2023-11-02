import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManagerQuizComponent } from './add-manager-quiz.component';

describe('AddManagerQuizComponent', () => {
  let component: AddManagerQuizComponent;
  let fixture: ComponentFixture<AddManagerQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddManagerQuizComponent]
    });
    fixture = TestBed.createComponent(AddManagerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
