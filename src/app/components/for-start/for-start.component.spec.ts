import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForStartComponent } from './for-start.component';

describe('ForStartComponent', () => {
  let component: ForStartComponent;
  let fixture: ComponentFixture<ForStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForStartComponent]
    });
    fixture = TestBed.createComponent(ForStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
