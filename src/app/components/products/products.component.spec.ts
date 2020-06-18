import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsComponent } from './products.component';
import { MovieDataService } from 'src/app/services/movieData/movie-data.service';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { MockShoppingcart } from 'src/app/services/shoppingcart/mockShoppingcart';
import { MockMovieData } from 'src/app/services/movieData/mockMovieData';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ ProductsComponent,
        {provide: MovieDataService, useClass: MockMovieData },
        {provide: ShoppingcartService, useClass: MockShoppingcart }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain list of products provided by service', () => {
    component.ngOnInit();
    expect(component.movieList.length).toBe(3);
  });

  it('should add one item to cart on click', () => {
    const cartService = new MockShoppingcart();
    expect(cartService.cartList.length).toBe(1);

    component.addToCart({ movieName: 'Name 2', movieId: 10,
      moviePrice: 100, movieImage: 'URL', movieDescription: 'Description',
      releaseYear: 2020, movieCategory: [{categoryId: 1, category: 'Text'}]
    });
    cartService.addToCart({ movieName: 'Name 2', movieId: 10,
    moviePrice: 100, movieImage: 'URL', movieDescription: 'Description',
    releaseYear: 2020, movieCategory: [{categoryId: 1, category: 'Text'}]
    });

    expect(cartService.cartList.length).toBe(2);

  });

  it('update total sum when item is added', () => {
    const cartService = new MockShoppingcart();
    expect(cartService.totalPrice).toBe(0);

    component.addToCart({ movieName: 'Name 2', movieId: 10,
    moviePrice: 100, movieImage: 'URL', movieDescription: 'Description',
    releaseYear: 2020, movieCategory: [{categoryId: 1, category: 'Text'}]
    });

    cartService.addToCart({ movieName: 'Name 2', movieId: 10,
    moviePrice: 100, movieImage: 'URL', movieDescription: 'Description',
    releaseYear: 2020, movieCategory: [{categoryId: 1, category: 'Text'}]
    });

    cartService.totalSum();
    expect(cartService.totalPrice).toBe(300);
  });

  // lägg eventuellt till ett test för kategorier här

});
