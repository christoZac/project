import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljobsChildComponent } from './alljobs-child.component';

describe('AlljobsChildComponent', () => {
  let component: AlljobsChildComponent;
  let fixture: ComponentFixture<AlljobsChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlljobsChildComponent]
    });
    fixture = TestBed.createComponent(AlljobsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
