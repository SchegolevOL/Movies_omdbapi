import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSearchMovieComponent } from './form-search-movie.component';

describe('FormSearchMovieComponent', () => {
  let component: FormSearchMovieComponent;
  let fixture: ComponentFixture<FormSearchMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSearchMovieComponent]
    });
    fixture = TestBed.createComponent(FormSearchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
