export class Cart {
  movieId: number;
  movieName: string;
  moviePrice: number;
  movieImage: string;
  movieDescription: string;
  releaseYear: number;
  movieCategory?: [{categoryId: number, category: string}];
  quantity: number;
  sum: number;
}
