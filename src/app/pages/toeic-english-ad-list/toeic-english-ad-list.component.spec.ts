import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToeicEnglishAdListComponent } from './toeic-english-ad-list.component';

describe('ToeicEnglishAdListComponent', () => {
  let component: ToeicEnglishAdListComponent;
  let fixture: ComponentFixture<ToeicEnglishAdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToeicEnglishAdListComponent]
    });
    fixture = TestBed.createComponent(ToeicEnglishAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
