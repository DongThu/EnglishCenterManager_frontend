import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEnglishAdListComponent } from './child-english-ad-list.component';

describe('ChildEnglishAdListComponent', () => {
  let component: ChildEnglishAdListComponent;
  let fixture: ComponentFixture<ChildEnglishAdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildEnglishAdListComponent]
    });
    fixture = TestBed.createComponent(ChildEnglishAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
