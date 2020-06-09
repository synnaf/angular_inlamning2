import { Subject } from 'rxjs';
import { Movie } from 'src/app/models/Movie';

export default interface IMovieData {
  movieList: Subject<Movie[]>;
  getMovies(): void;
}
