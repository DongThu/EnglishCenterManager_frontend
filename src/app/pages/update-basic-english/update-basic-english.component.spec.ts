import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBasicEnglishComponent } from './update-basic-english.component';

describe('UpdateBasicEnglishComponent', () => {
  let component: UpdateBasicEnglishComponent;
  let fixture: ComponentFixture<UpdateBasicEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBasicEnglishComponent]
    });
    fixture = TestBed.createComponent(UpdateBasicEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
