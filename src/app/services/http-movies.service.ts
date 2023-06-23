import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovieResponse } from '../models/i-movie-response';
import { IMovieDetale } from '../models/i-movie-detale';
import { IMovieFavorite } from '../models/i-movie-favorite';

@Injectable({
  providedIn: 'root',
})
export class HttpMoviesService {

  public movies: IMovieResponse | undefined;
  selectTitle: string = '';
  selectPage: number = 1;
  pages: Array<number> = [];
  detale: IMovieDetale | undefined;
  favoriteMovies: Array<IMovieFavorite>=[];

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

  async searchDetale(id: string) {
    try {
      console.log(id);

      this.detale = await this.http
        .get<IMovieDetale>(`https://omdbapi.com/?i=${id}&apikey=5b9b7798`)
        .toPromise();
    } catch (error) {
      console.log('error');
      console.error(error);
    }
    console.log(this.detale);
  }

  private getArrPages(): void {
    let lenght = Math.ceil(parseInt(this.movies?.totalResults!) / 10);


    this.pages = [];
    for (let i =  (this.selectPage>lenght-5?
                  (lenght-5*2)+1:
                  (this.selectPage>5)?
                  this.selectPage-5:1); 
                  i <= (this.selectPage<5?
                  5*2:
                   (this.selectPage<lenght-5?
                    this.selectPage+5:lenght) ); i++) {
     this.pages.push(i);
      
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
favorite(){
  
}

saveFavorite(id:string, favorite:boolean): void {
    localStorage.setItem(
      "Favorite",
      JSON.stringify(this.movies)
    );
  }

  loadFavorite(): boolean {
    let json = localStorage.getItem("Favorite");
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
