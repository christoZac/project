import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageParentComponent } from './message-parent.component';

describe('MessageParentComponent', () => {
  let component: MessageParentComponent;
  let fixture: ComponentFixture<MessageParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageParentComponent]
    });
    fixture = TestBed.createComponent(MessageParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
