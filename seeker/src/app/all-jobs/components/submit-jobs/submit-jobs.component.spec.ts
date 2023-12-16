import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitJobsComponent } from './submit-jobs.component';

describe('SubmitJobsComponent', () => {
  let component: SubmitJobsComponent;
  let fixture: ComponentFixture<SubmitJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmitJobsComponent]
    });
    fixture = TestBed.createComponent(SubmitJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
