import { Movie } from 'src/app/models/Movie';
import { Subject } from 'rxjs';

export default interface ISearch {
  searchList: Subject<Movie[]>;
  searchResult(): Movie;
  searchMovie(): void;
}
