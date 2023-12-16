import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljobsParentComponent } from './alljobs-parent.component';

describe('AlljobsParentComponent', () => {
  let component: AlljobsParentComponent;
  let fixture: ComponentFixture<AlljobsParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlljobsParentComponent]
    });
    fixture = TestBed.createComponent(AlljobsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
