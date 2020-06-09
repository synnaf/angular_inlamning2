import IMovieData from './IMovieData';
import { Movie } from 'src/app/models/Movie';
import { Subject } from 'rxjs';


export class MockMovieData implements IMovieData {
  private testMovies: Movie[] = [
    { movieName: 'Star Wars 1', movieId: 91,
    moviePrice: 100, movieImage: 'www.google.se',
    movieDescription: 'snshshshs', releaseYear: 2001,
    movieCategory: 'x'},
    { movieName: 'Star Wars 3', movieId: 3,
    moviePrice: 100, movieImage: 'www.google.se',
    movieDescription: 'snshshshs', releaseYear: 2001,
    movieCategory: 'x'},
    { movieName: 'Star Wars 3', movieId: 3,
    moviePrice: 100, movieImage: 'www.google.se',
    movieDescription: 'snshshshs', releaseYear: 2001 },
    { movieName: 'Star Wars 4', movieId: 4,
    moviePrice: 100, movieImage: 'www.google.se',
    movieDescription: 'snshshshs', releaseYear: 2001,
    movieCategory: 'x'},
    { movieName: 'Star Wars 5', movieId: 5,
    moviePrice: 100, movieImage: 'www.google.se',
    movieDescription: 'snshshshs', releaseYear: 2001 }
  ];

  movieList: Subject<Movie[]> = new Subject<Movie[]>();

  getMovies(): void {
    this.movieList.next(this.testMovies);
  }

}
