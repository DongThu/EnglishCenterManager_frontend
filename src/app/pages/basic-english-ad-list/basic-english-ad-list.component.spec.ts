import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEnglishAdListComponent } from './basic-english-ad-list.component';

describe('BasicEnglishAdListComponent', () => {
  let component: BasicEnglishAdListComponent;
  let fixture: ComponentFixture<BasicEnglishAdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEnglishAdListComponent]
    });
    fixture = TestBed.createComponent(BasicEnglishAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
