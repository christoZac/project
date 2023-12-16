import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationChildComponent } from './application-child.component';

describe('ApplicationChildComponent', () => {
  let component: ApplicationChildComponent;
  let fixture: ComponentFixture<ApplicationChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationChildComponent]
    });
    fixture = TestBed.createComponent(ApplicationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
