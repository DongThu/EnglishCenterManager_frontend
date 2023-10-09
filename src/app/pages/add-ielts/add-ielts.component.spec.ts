import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIeltsComponent } from './add-ielts.component';

describe('AddIeltsComponent', () => {
  let component: AddIeltsComponent;
  let fixture: ComponentFixture<AddIeltsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIeltsComponent]
    });
    fixture = TestBed.createComponent(AddIeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
