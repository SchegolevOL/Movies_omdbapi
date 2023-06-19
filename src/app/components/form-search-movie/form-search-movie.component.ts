import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { IMovieResponse } from 'src/app/models/i-movie-response';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-form-search-movie',
  templateUrl: './form-search-movie.component.html',
  styleUrls: ['./form-search-movie.component.scss'],
})
export class FormSearchMovieComponent {
  formTitle: string ="";  
  constructor() {}
  @Output() searchTitle: EventEmitter<string>=new EventEmitter;
  onClickSearch(){
    this.searchTitle.emit(this.formTitle);
    this.formTitle="";
    }
  
}
