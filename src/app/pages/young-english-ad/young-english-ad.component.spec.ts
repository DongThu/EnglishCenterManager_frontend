import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungEnglishAdComponent } from './young-english-ad.component';

describe('YoungEnglishAdComponent', () => {
  let component: YoungEnglishAdComponent;
  let fixture: ComponentFixture<YoungEnglishAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoungEnglishAdComponent]
    });
    fixture = TestBed.createComponent(YoungEnglishAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
