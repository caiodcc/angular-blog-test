import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStructureComponent } from './home-structure.component';

describe('HomeStructureComponent', () => {
  let component: HomeStructureComponent;
  let fixture: ComponentFixture<HomeStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStructureComponent]
    });
    fixture = TestBed.createComponent(HomeStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
