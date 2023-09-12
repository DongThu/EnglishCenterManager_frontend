import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiecComponent } from './toiec.component';

describe('ToiecComponent', () => {
  let component: ToiecComponent;
  let fixture: ComponentFixture<ToiecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToiecComponent]
    });
    fixture = TestBed.createComponent(ToiecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
