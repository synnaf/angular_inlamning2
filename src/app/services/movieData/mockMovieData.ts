import IMovieData from './IMovieData';
import { Movie } from 'src/app/models/Movie';
import { Subject } from 'rxjs';

export class MockMovieData implements IMovieData {

  movieList: Subject<Movie[]> = new Subject<Movie[]>();

  mockList: Movie[] = [
    {movieName: "Name 1", movieId: 1, moviePrice: 100, movieImage: "URL",
    movieDescription: "Descriptive text", releaseYear: 2020, movieCategory: [{categoryId: 1, category: "Text"}]},
    {movieName: "Name 2", movieId: 1, moviePrice: 100, movieImage: "URL",
    movieDescription: "Descriptive text", releaseYear: 2020, movieCategory: [{categoryId: 1, category: "Text"}]},
    {movieName: "Name 3", movieId: 1, moviePrice: 100, movieImage: "URL",
    movieDescription: "Descriptive text", releaseYear: 2020, movieCategory: [{categoryId: 1, category: "Text"}]},
  ];

  // movieData: {movieName: "Name 1", movieId: 1, moviePrice: 100, movieImage: "URL",
  // movieDescription: "Descriptive text", releaseYear: 2020,
  // movieCategory: [{categoryId: 3, category: "Text"}]};

  // funktionen som körs när komponenten laddas
  getMovies(): void {
    this.movieList.next(this.mockList);
  }

  getMoviesBySearch(term: string) {
    throw new Error("Method not implemented.");
  }

}
