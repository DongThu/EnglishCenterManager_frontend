import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeicEnglishAdComponent } from './toeic-english-ad.component';

describe('ToeicEnglishAdComponent', () => {
  let component: ToeicEnglishAdComponent;
  let fixture: ComponentFixture<ToeicEnglishAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToeicEnglishAdComponent]
    });
    fixture = TestBed.createComponent(ToeicEnglishAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
