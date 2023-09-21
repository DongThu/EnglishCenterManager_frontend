import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltsEnglishAdListComponent } from './ielts-english-ad-list.component';

describe('IeltsEnglishAdListComponent', () => {
  let component: IeltsEnglishAdListComponent;
  let fixture: ComponentFixture<IeltsEnglishAdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IeltsEnglishAdListComponent]
    });
    fixture = TestBed.createComponent(IeltsEnglishAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
