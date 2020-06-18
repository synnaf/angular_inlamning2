import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { ActivatedRoute } from '@angular/router';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


  id: number;
  selectedMovie: Movie;
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MovieDataService,
    private cartService: ShoppingcartService
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

  addToCart(movie: Movie) {
    console.log(movie);
    this.cartService.addToCart(movie);
  }


}
