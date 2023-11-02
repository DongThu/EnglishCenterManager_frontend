import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamTopicComponent } from './add-exam-topic.component';

describe('AddExamTopicComponent', () => {
  let component: AddExamTopicComponent;
  let fixture: ComponentFixture<AddExamTopicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddExamTopicComponent]
    });
    fixture = TestBed.createComponent(AddExamTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
