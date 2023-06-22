import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IMovie } from 'src/app/models/i-movie';
import { IMovieDetale } from 'src/app/models/i-movie-detale';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {
  
  @Input() movie?: IMovie;
  @Input() detale?: IMovieDetale;
  @Output() detaleClick: EventEmitter<string>=new EventEmitter;
  onClickDetale(){
    this.detaleClick.emit(this.movie!.imdbID);
   
    }
}
