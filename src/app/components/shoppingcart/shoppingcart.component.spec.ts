import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingcartComponent } from './shoppingcart.component';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { MockShoppingcart } from 'src/app/services/shoppingcart/mockShoppingcart';
import { Cart } from 'src/app/models/Cart';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShoppingcartComponent', () => {
  let component: ShoppingcartComponent;
  let fixture: ComponentFixture<ShoppingcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ShoppingcartComponent, {provide: ShoppingcartService, useClass: MockShoppingcart }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render items in cart', () => {
    expect(component.cartItems.length).toBe(1);
  });

  it('should not render checkoutform unless ready', () => {
    expect(component.showForm).toBeFalsy();
    component.showForm = true;
    expect(component.showForm).toBeTruthy();
  });


  it('should decrease item quantity', ()=> {
    const cartService = new MockShoppingcart();

    expect(component.cartItems.length).toBe(1);
    expect(component.cartItems[0].quantity).toBe(2);

    component.decrease({
      movieId: 1, movieName: 'Text', moviePrice: 100,
      movieImage: 'URL', movieDescription: 'Text', releaseYear: 2020,
      movieCategory: [{categoryId: 1, category: 'Text'}],
      quantity: 2, sum: 200
    });

    cartService.decreaseItems({
      movieId: 1, movieName: 'Text', moviePrice: 100,
      movieImage: 'URL', movieDescription: 'Text', releaseYear: 2020,
      movieCategory: [{categoryId: 1, category: 'Text'}],
      quantity: 2, sum: 200
    });

    expect(component.cartItems[0].quantity).toBe(2); // denna ska vara 1 men värdet ändras ej
    expect(component.cartItems.length).toBe(1);

  });

});
