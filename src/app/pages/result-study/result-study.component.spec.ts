import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultStudyComponent } from './result-study.component';

describe('ResultStudyComponent', () => {
  let component: ResultStudyComponent;
  let fixture: ComponentFixture<ResultStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultStudyComponent]
    });
    fixture = TestBed.createComponent(ResultStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
