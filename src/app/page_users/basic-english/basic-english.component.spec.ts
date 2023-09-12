import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEnglishComponent } from './basic-english.component';

describe('BasicEnglishComponent', () => {
  let component: BasicEnglishComponent;
  let fixture: ComponentFixture<BasicEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEnglishComponent]
    });
    fixture = TestBed.createComponent(BasicEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
