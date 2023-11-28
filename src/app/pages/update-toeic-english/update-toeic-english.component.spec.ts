import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateToeicEnglishComponent } from './update-toeic-english.component';

describe('UpdateToeicEnglishComponent', () => {
  let component: UpdateToeicEnglishComponent;
  let fixture: ComponentFixture<UpdateToeicEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateToeicEnglishComponent]
    });
    fixture = TestBed.createComponent(UpdateToeicEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
