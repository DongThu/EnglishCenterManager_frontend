import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBasicEnglishComponent } from './add-basic-english.component';

describe('AddBasicEnglishComponent', () => {
  let component: AddBasicEnglishComponent;
  let fixture: ComponentFixture<AddBasicEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBasicEnglishComponent]
    });
    fixture = TestBed.createComponent(AddBasicEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
