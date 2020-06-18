import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { Movie } from 'src/app/models/Movie';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  movieList: Movie[] = [];
  categoryList: Movie[] = [];
  show: boolean;

  constructor(private service: MovieDataService, private cartService: ShoppingcartService) { }

  ngOnInit(): void {
    this.service.movieList.subscribe((movie: Movie[]) => {
      this.movieList = movie;
    });
    this.service.getMovies();
  }

  addToCart(movie: Movie) {
    console.log(movie);
    this.cartService.addToCart(movie);
  }

  displayCategory(event) {
      this.show = !this.show;
      if(this.show) {
        this.movieList.map((movieObj) => {
          movieObj.movieCategory.forEach((cat) => {
            if(cat.categoryId == event.target.id) {
              this.categoryList.push(movieObj);
            }
          });
        });
        return this.categoryList;
      } else {
        return this.categoryList = [];
      }
  }

}
