import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovie } from 'src/app/models/i-movie';

@Component({
  selector: 'app-pagination-movies',
  templateUrl: './pagination-movies.component.html',
  styleUrls: ['./pagination-movies.component.scss'],
})
export class PaginationMoviesComponent {
  activePage: number=1;
  @Output() selectPage: EventEmitter<number>=new EventEmitter;
  @Input() pages: Array<number> = [];
  onClickPageNumber(page:number) {
    this.activePage = page;
    this.selectPage.emit(page);
    
  }
}
