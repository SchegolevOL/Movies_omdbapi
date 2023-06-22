import { Component } from '@angular/core';

import { IMovieResponse } from 'src/app/models/i-movie-response';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-gride-movies',
  templateUrl: './gride-movies.component.html',
  styleUrls: ['./gride-movies.component.scss']
})
export class GrideMoviesComponent {
  search?: IMovieResponse| undefined;
  constructor(public httpMoviesServises: HttpMoviesService) {}

  searchTitle(title: string){
    this.httpMoviesServises.searchMovies(title);
    
  }

  selectPage(page:number){
    this.httpMoviesServises.page(page);
   
  }
  clickDetale(id:string){
    this.httpMoviesServises.searchDetale(id);
  }
}
