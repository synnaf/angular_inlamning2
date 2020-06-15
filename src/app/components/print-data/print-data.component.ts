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
  categoryList: Movie[] = [];
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
        console.log(event.target.value)
        this.movieList.map((movieObj) => {
          movieObj.movieCategory.forEach((cat) => {
            console.log(cat);
            if(cat.categoryId == event.target.value) {
              this.categoryList.push(movieObj);
            }
          });
        });
        console.log(this.categoryList);
        return this.categoryList;
      } else {
        // ta bort filmerna ur listan
        // här borde jag kunna skriva logik för att:
        /*
        Om filmerna inte finns i listan, lägg till dem. Sker ovan?
        Om filmerna finns i listan, ta bort dem ur listan. Sker här?
        Om filmen har mer än en kategori - hur ska man hantera detta?
        Ex. en film hat kategori 5 + 8, dvs. så loopar den ju igenom mer än en egenskap?
        Arrayen för productCategoryId består av två värden? Eller har den flera objekt?
        En array med två objekt som har ett varsit objectId
        När man visar två kategorier så visar den alla filmer
         */
         this.categoryList = [];
      }
  }
}
