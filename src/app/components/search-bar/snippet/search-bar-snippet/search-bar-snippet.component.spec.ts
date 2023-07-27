import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarSnippetComponent } from './search-bar-snippet.component';

describe('SearchBarSnippetComponent', () => {
  let component: SearchBarSnippetComponent;
  let fixture: ComponentFixture<SearchBarSnippetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarSnippetComponent]
    });
    fixture = TestBed.createComponent(SearchBarSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
