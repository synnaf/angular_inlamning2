import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from '../services/movieData/movie-data.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  selectedMovie: Movie;
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MovieDataService
    ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.service.movieList.subscribe((m: Movie[]) => {
      this.selectedMovie = m.find((movie: Movie) => movie.movieId == this.id);
      console.log(this.selectedMovie);
    });

    this.service.getMovies();
  }

}




