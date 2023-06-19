import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IMovie } from 'src/app/models/i-movie';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {
  
  @Input() movie?: IMovie;
}
