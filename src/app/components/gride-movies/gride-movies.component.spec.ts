import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrideMoviesComponent } from './gride-movies.component';

describe('GrideMoviesComponent', () => {
  let component: GrideMoviesComponent;
  let fixture: ComponentFixture<GrideMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrideMoviesComponent]
    });
    fixture = TestBed.createComponent(GrideMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
