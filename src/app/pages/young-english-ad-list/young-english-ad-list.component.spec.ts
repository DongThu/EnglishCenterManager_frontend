import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungEnglishAdListComponent } from './young-english-ad-list.component';

describe('YoungEnglishAdListComponent', () => {
  let component: YoungEnglishAdListComponent;
  let fixture: ComponentFixture<YoungEnglishAdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoungEnglishAdListComponent]
    });
    fixture = TestBed.createComponent(YoungEnglishAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
