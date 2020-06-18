import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CheckoutFormComponent } from './checkout-form.component';
import { MockShoppingcart } from 'src/app/services/shoppingcart/mockShoppingcart';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { MockOrderService } from 'src/app/services/order/mockOrder';
import { OrderService } from 'src/app/services/order/order.service';
import { Mock } from 'protractor/built/driverProviders';

describe('CheckoutFormComponent', () => {
  let component: CheckoutFormComponent;
  let fixture: ComponentFixture<CheckoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutFormComponent ],
      providers: [ CheckoutFormComponent,
        {provide: FormBuilder},
        {provide: ShoppingcartService, useClass: MockShoppingcart},
        {provide: OrderService, useClass: MockOrderService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.cartItems.length).toBe(1);
  });

});

