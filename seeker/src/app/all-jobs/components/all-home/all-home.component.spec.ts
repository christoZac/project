import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHomeComponent } from './all-home.component';

describe('AllHomeComponent', () => {
  let component: AllHomeComponent;
  let fixture: ComponentFixture<AllHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllHomeComponent]
    });
    fixture = TestBed.createComponent(AllHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
