import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToiecComponent } from './add-toiec.component';

describe('AddToiecComponent', () => {
  let component: AddToiecComponent;
  let fixture: ComponentFixture<AddToiecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToiecComponent]
    });
    fixture = TestBed.createComponent(AddToiecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
