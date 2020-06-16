import IMovieData from './IMovieData';
import { Movie } from 'src/app/models/Movie';
import { Subject } from 'rxjs';


export class MockMovieData implements IMovieData {
  movieList: Subject<Movie[]>;
  getMovies(): void {
    throw new Error("Method not implemented.");
  }
  getMoviesBySearch(term: string) {
    throw new Error("Method not implemented.");
  }


}
