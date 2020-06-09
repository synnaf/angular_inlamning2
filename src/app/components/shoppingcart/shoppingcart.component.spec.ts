import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartComponent } from './shoppingcart.component';
import { By } from '@angular/platform-browser';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { MockShoppingcart } from 'src/app/services/shoppingcart/mock-shoppingcart';
import { Movie } from 'src/app/models/Movie';

describe('ShoppingcartComponent', () => {
  let component: ShoppingcartComponent;
  let fixture: ComponentFixture<ShoppingcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartComponent ],
      providers: [ ShoppingcartService, {provide: ShoppingcartService, useClass: MockShoppingcart }]
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


  // vad vill jag ska hända i den här komponenten?
  // den ska rendera lika många objekt på skärmen som det finns objekt i listan

  it('should render text if the cart is empty, else render objects in cart', () => {
    if (component.cartItems.length === 0) {
      const emptyCart = fixture.debugElement.query(By.css('.placeholder-text')).nativeElement;
      expect(emptyCart.innerHTML).toContain('Cart is empty!');
    } else {
      expect(component.cartItems.length).toBeGreaterThan(0);
      const shoppingCart = fixture.debugElement.query(By.css('.item-info')).nativeElement;
      expect(shoppingCart.innerHTML).toContain('Star Wars');
    }

  });


  it('should increase number of items in cart', () => {
    const itemsInCart = component.cartItems.length;
    expect(itemsInCart).toBe(2);

    const spy = spyOn(component, 'increase');
    component.increase(this.item); // hittar inte denna
    expect(spy).toHaveBeenCalled();
    expect(component.cartItems.length).toBe(itemsInCart + 1);

  });


  it('should decrease number of items in cart', () => {
    const itemsInCart = component.cartItems.length;
    expect(itemsInCart).toBe(2);

    const spy = spyOn(component, 'decrease');
    component.decrease(this.item); // hittar inte denna
    expect(spy).toHaveBeenCalled();
    expect(component.cartItems.length).toBe(itemsInCart - 1);

  });




});
