import { Injectable } from '@angular/core';
import IMovieData from './IMovieData';
import { Subject } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService implements IMovieData {

  constructor(private http: HttpClient) { }
  movieList: Subject<Movie[]> = new Subject<Movie[]>();

  getMovies(): void {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products').subscribe((movieData: any) => {
      const moviesFromApi: Movie[] = movieData.map(movie => {
        const movieFromApi = new Movie();
        movieFromApi.movieName = movie.name;
        movieFromApi.movieId = movie.id;
        movieFromApi.moviePrice = movie.price;
        movieFromApi.movieImage = movie.imageUrl;
        movieFromApi.movieDescription = movie.description;
        movieFromApi.releaseYear = movie.year;
        movieFromApi.movieCategory = movie.productCategory;
        return movieFromApi;
      });
      this.movieList.next(moviesFromApi);
    });
  }

}
