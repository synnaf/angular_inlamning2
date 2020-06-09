import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDataComponent } from './print-data.component';
import { MockMovieData } from 'src/app/services/movieData/mock-movie-data';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';
import { By } from '@angular/platform-browser';

describe('PrintDataComponent', () => {
  let component: PrintDataComponent;
  let fixture: ComponentFixture<PrintDataComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintDataComponent ],
      providers: [ PrintDataComponent, {provide: MovieDataService, useClass: MockMovieData}]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Vad är syftet med min komponent? Vad vill jag ska ske här?
  // komponenten hämtar data
  // komponenten presenterar data

  // komponenten kommunicerar med sin service?


  it('should contain list of products', () => {
    // något händer
    const movieService = new MockMovieData();
    movieService.getMovies();
    expect(component.movieList.length).toBe(5);
  });

  it('should render list of products with two clickable buttons', () => {
    // hämta listan med filmer
    // kontrollera att det skapas upp objekt på skärmen

    const productCard = fixture.debugElement.query(By.css('.product-card')).nativeElement;
    expect(productCard.innerHTML).toContain('Star Wars');
    // console.log(board.innerHTML)
    // expect(board.innerHTML.length).toBeGreaterThan(0);

    const productButtons = fixture.debugElement.query(By.css('.product-buttons')).nativeElement;
    expect(productButtons.innerHTML).toContain('Add to cart', 'About');


  });

  // detta test borde kanske ligga i shoppingcart?
  // i shoppingcart kontrollerar vi listan, och sedan huruvida objekten har lagts till via servicen?

  it('when buy button is clicked, a movie is forwarderd?', () => {
    const movie = { movieName: 'Star Wars 1', movieId: 91,
    moviePrice: 100, movieImage: 'www.google.se',
    movieDescription: 'snshshshs', releaseYear: 2001,
    movieCategory: 'x'};

    const spy = spyOn(component, 'addToCart');
    component.addToCart(movie); // undefined om jag ej skapar ett objekt här i testet
    expect(spy).toHaveBeenCalledWith(movie);

});


  // it('when buy button is clicked, a movie is forwarderd?', () => {


  //     // // objekt i varukorgen är från början 2
  //     const numberOfItemsInTheBeginning = service.cartList.length;
  //     expect(numberOfItemsInTheBeginning).toBe(2);

  //     // när add to Cart körs ändras och vår service ger oss 3 objekt
  //     service.addToCart(this.movie); // denna kommer tillbaka som undefined om det ej deklareras såhär?

  //     // från vår service tar vi emot 3 objekt
  //     expect(service.cartList.length).toBe(numberOfItemsInTheBeginning + 1);

  // });


});
