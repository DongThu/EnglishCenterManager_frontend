import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEnglishAdComponent } from './basic-english-ad.component';

describe('BasicEnglishAdComponent', () => {
  let component: BasicEnglishAdComponent;
  let fixture: ComponentFixture<BasicEnglishAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEnglishAdComponent]
    });
    fixture = TestBed.createComponent(BasicEnglishAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
