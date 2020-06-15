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
  categoryList = [];
  show: boolean;

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


// denna lista behöver tömmas varje gånt !this.show så att den börjar om!

  displayCategory(event) {
      this.show = !this.show;
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show) {

        this.movieList.map((movieObj) => {
          // kontrollera om den har movieCategory
          // och om movieCategory.categoryId === 5
          movieObj.movieCategory.forEach((cat) => {
            // skriv ut kategorierna för alla filmer
            // om kategorierna stämmer med value på input
            if(cat.categoryId == event.target.value) {
              // skriv ut filmerna från array 1?
              console.log(cat);
              // skriv en funktion som matchar filmerna som kanske kan köras här?
              this.categoryList.push(movieObj);
            }
          });
        });
        console.log(this.categoryList);
      } else {
        // visa inga filmer?? ta bort filmerna / töm listan
        console.log(event.target.value);
    }

  }

}
