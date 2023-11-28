import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateYoungEnglishComponent } from './update-young-english.component';

describe('UpdateYoungEnglishComponent', () => {
  let component: UpdateYoungEnglishComponent;
  let fixture: ComponentFixture<UpdateYoungEnglishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateYoungEnglishComponent]
    });
    fixture = TestBed.createComponent(UpdateYoungEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
