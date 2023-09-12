import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungEnglishComponent } from './young-english.component';

describe('YoungEnglishComponent', () => {
  let component: YoungEnglishComponent;
  let fixture: ComponentFixture<YoungEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoungEnglishComponent]
    });
    fixture = TestBed.createComponent(YoungEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
