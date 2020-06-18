import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/models/Movie';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchMovies: Observable<Movie[]>;
  private searchTerms = new Subject<string>();

  constructor(private searchService: MovieDataService ) { }

  ngOnInit(): void {
    this.searchMovies = this.searchTerms.pipe(
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.getMoviesBySearch(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
