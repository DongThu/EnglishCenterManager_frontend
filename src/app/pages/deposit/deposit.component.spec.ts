import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostComponent } from './deposit.component';

describe('CostComponent', () => {
  let component: CostComponent;
  let fixture: ComponentFixture<CostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostComponent]
    });
    fixture = TestBed.createComponent(CostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
