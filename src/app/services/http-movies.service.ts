import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovieResponse } from '../models/i-movie-response';


@Injectable({
  providedIn: 'root',
})
export class HttpMoviesService {
  public movies: IMovieResponse | undefined;
  selectTitle: string = '';
  selectPage: number = 1;
  pages: Array<number> = [];

  constructor(public http: HttpClient) {}

  async searchMovies(searchTitle: string) {
    this.selectTitle = searchTitle;
    if (this.load()) {
      this.load();
      return;
    }
    try {
      console.log('load - ' + this.load());
      console.log(searchTitle);

      this.movies = await this.http
        .get<IMovieResponse>(
          `https://omdbapi.com/?s=${searchTitle}&apikey=5b9b7798&page=${this.selectPage}`
        )
        .toPromise();
    } catch (error) {
      console.log('error');
      console.error(error);
    }
    this.getArrPages();
    this.save();
    this.selectPage = 1;
  }

  private getArrPages(): void {
    let lenght = parseInt(this.movies?.totalResults!);
    this.pages = [];
    for (let i = 0; i < lenght / 10; i++) {
      this.pages[i] = i + 1;
    }
  }

  page(page: number): void {
    this.selectPage = page;
    this.searchMovies(this.selectTitle);
  }

  save(): void {
    localStorage.setItem(
      this.selectTitle + this.selectPage,
      JSON.stringify(this.movies)
    );
  }

  load(): boolean {
    let json = localStorage.getItem(this.selectTitle + this.selectPage);
    console.log('title - ' + this.selectTitle + this.selectPage);

    console.log('json - ' + json);
    let valid = false;
    if (json) {
      valid = true;
      this.movies = JSON.parse(json);
      this.getArrPages();
    }

    return valid;
  }
}
