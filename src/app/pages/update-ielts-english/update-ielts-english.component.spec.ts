import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIeltsEnglishComponent } from './update-ielts-english.component';

describe('UpdateIeltsEnglishComponent', () => {
  let component: UpdateIeltsEnglishComponent;
  let fixture: ComponentFixture<UpdateIeltsEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateIeltsEnglishComponent]
    });
    fixture = TestBed.createComponent(UpdateIeltsEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
