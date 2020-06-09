import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-print-data',
  templateUrl: './print-data.component.html',
  styleUrls: ['./print-data.component.scss']
})
export class PrintDataComponent implements OnInit {

  movieList: Movie[] = [];

  constructor(private service: MovieDataService, private cartService: ShoppingcartService) { }

  ngOnInit(): void {

    this.service.movieList.subscribe((movie: Movie[]) => {
      this.movieList = movie;
    });
    this.service.getMovies();

  }

// denna funktion ska egentligen skapa upp ett objekt
  addToCart(movie: Movie) {
    console.log(movie);
    this.cartService.addToCart(movie);
  }

}
