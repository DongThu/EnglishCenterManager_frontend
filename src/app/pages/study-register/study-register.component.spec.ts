import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRegisterComponent } from './study-register.component';

describe('StudyRegisterComponent', () => {
  let component: StudyRegisterComponent;
  let fixture: ComponentFixture<StudyRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyRegisterComponent]
    });
    fixture = TestBed.createComponent(StudyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
