import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltsEnglishAdComponent } from './ielts-english-ad.component';

describe('IeltsEnglishAdComponent', () => {
  let component: IeltsEnglishAdComponent;
  let fixture: ComponentFixture<IeltsEnglishAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IeltsEnglishAdComponent]
    });
    fixture = TestBed.createComponent(IeltsEnglishAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
