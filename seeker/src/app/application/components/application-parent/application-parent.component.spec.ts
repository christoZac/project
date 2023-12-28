import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationParentComponent } from './application-parent.component';

describe('ApplicationParentComponent', () => {
  let component: ApplicationParentComponent;
  let fixture: ComponentFixture<ApplicationParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationParentComponent]
    });
    fixture = TestBed.createComponent(ApplicationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
