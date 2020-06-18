import { TestBed } from '@angular/core/testing';
import { MovieDataService } from './movie-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('MovieDataService', () => {
  let service: MovieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MovieDataService ]
    });
    service = TestBed.inject(MovieDataService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

