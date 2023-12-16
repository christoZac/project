import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJobsComponent } from './apply-jobs.component';

describe('ApplyJobsComponent', () => {
  let component: ApplyJobsComponent;
  let fixture: ComponentFixture<ApplyJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyJobsComponent]
    });
    fixture = TestBed.createComponent(ApplyJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
