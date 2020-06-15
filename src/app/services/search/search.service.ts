import { Injectable } from '@angular/core';
import ISearch from './ISearch';
import { Movie } from 'src/app/models/Movie';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { MovieDataService } from '../movieData/movie-data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements ISearch {


  constructor(private http: HttpClient, private movies: MovieDataService) { }

  searchList: Subject<Movie[]> = new Subject<Movie[]>();

  searchResult(): Movie {
    throw new Error("Method not implemented.");
  }

  searchMovie(): void {
    throw new Error("Method not implemented.");
  }

  searchHeroes(term: string) {
    console.log(term);

  }


}




