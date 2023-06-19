import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationMoviesComponent } from './pagination-movies.component';

describe('PaginationMoviesComponent', () => {
  let component: PaginationMoviesComponent;
  let fixture: ComponentFixture<PaginationMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationMoviesComponent]
    });
    fixture = TestBed.createComponent(PaginationMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
