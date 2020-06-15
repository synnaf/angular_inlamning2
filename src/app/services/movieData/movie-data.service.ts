import { Injectable } from '@angular/core';
import IMovieData from './IMovieData';
import { Subject, Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/Movie';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

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

  // sökfunktionen
  getMoviesBySearch(term: string): Observable<Movie[]> {
    console.log(term);
    if (!term.trim()) {
      return of([]); // returnera tom array
    }


    // https://medieinstitutet-wie-products.azurewebsites.net/api/search?=dark&fbclid=IwAR0i7JNPEdbYBSjM2HnIK0xx4293fiepELJxJ00yzYhgIprfulOAqnpfRx8

    return this.http.get<Movie[]>(`https://medieinstitutet-wie-products.azurewebsites.net/api/search/?=${term}`)
    .pipe(tap(x => x.length ?
        console.log(`found heroes matching "${term}"` ) :
        console.log(`no heroes matching "${term}"`)),
        catchError(this.handleError<Movie[]>('searchHeroes', []))
        );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
