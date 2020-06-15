
export class Movie {
  movieName: string;
  movieId: number;
  moviePrice: number;
  movieImage: string;
  movieDescription: string;
  releaseYear: number;
  movieCategory?: [{categoryId: number, category: string}]
}


// movieCategory?: { categoryId: number, category: string };
