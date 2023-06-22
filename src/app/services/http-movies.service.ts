import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovieResponse } from '../models/i-movie-response';
import { IMovieDetale } from '../models/i-movie-detale';

@Injectable({
  providedIn: 'root',
})
export class HttpMoviesService {
  public movies: IMovieResponse | undefined;
  selectTitle: string = '';
  selectPage: number = 1;
  pages: Array<number> = [];
  detale: IMovieDetale | undefined;

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
console.log(lenght)
      console.log(this.selectPage);
      console.log(this.pages);




    // if (this.selectPage < 10 || lenght <= 10) {
    //   for (let i = 1; i < lenght; i++) {
    //     this.pages[i] = i + 1;
    //   } else if (this.selectPage < 10 || lenght <= 10) {
    //     for (let i = this.selectPage; i < lenght; i++) {
    //       this.pages[i] = i + 1;
    //     }
    //   }
    // }
    // if (this.selectPage < 5) {
    //   for (let i = 0; i < 10; i++) {
    //     this.pages[i] = i + 1;
    //   }
      
    //   return;
    // }
    // if (this.selectPage >= lenght - 6) {
    //   console.log("gud")
    //   for (let i = lenght - 10; i < lenght; i++) {
    //     this.pages[i] = i + 1;
    //   }
    //   console.log(lenght)
    //   console.log(this.selectPage+" 2");
    //   console.log(this.pages);
    //   return;
    // }

    // for (let i = 6; i < lenght - 10; i++) {
    //   this.pages[i] = i + 1;
    //   console.log(lenght)
    //   console.log(this.selectPage+" 3")
    //   console.log(this.pages);
    //   return;
    // }
  }

  page(page: number): void {
    this.selectPage = page;
    this.getArrPages();
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
