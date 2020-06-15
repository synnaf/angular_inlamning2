import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/models/Movie';
import { SearchService } from 'src/app/services/search/search.service';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {

  searchMovies: Observable<Movie[]>;
  private searchTerms = new Subject<string>();


  constructor(private searchService: MovieDataService ) { }


  ngOnInit(): void {


    this.searchMovies = this.searchTerms.pipe(
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchService.getMoviesBySearch(term)),
    );

  }

  // push term into observable stream, this method is called from input
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
