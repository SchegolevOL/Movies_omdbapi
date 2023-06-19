import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GrideMoviesComponent } from './components/gride-movies/gride-movies.component';
import { FormSearchMovieComponent } from './components/form-search-movie/form-search-movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { PaginationMoviesComponent } from './components/pagination-movies/pagination-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    GrideMoviesComponent,
    FormSearchMovieComponent,
    CardMovieComponent,
    PaginationMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
