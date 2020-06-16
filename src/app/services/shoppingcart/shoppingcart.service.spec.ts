import { TestBed } from '@angular/core/testing';

import { ShoppingcartService } from './shoppingcart.service';
import { Movie } from 'src/app/models/Movie';

describe('ShoppingcartService', () => {
  let service: ShoppingcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
