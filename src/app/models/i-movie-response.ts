import { IMovie } from './i-movie';

export interface IMovieResponse {
  Response?: string;
  Search?: Array<IMovie>;
  totalResults?: string;
 
}
