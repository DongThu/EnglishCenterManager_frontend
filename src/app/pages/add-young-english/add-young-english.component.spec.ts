import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYoungEnglishComponent } from './add-young-english.component';

describe('AddYoungEnglishComponent', () => {
  let component: AddYoungEnglishComponent;
  let fixture: ComponentFixture<AddYoungEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddYoungEnglishComponent]
    });
    fixture = TestBed.createComponent(AddYoungEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
