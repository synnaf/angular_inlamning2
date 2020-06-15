
// modellen cart är för hur shoppingcart-objekten ska se ut
// när man trycker på buy så skapas ett shoppingcart objekt
// denna lagras i en array i vår shoppingcart-component + service!


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

// varje produkt i vår shoppingcart ska ha:
// ett movieobjekt
// en quantity (default 1)
// en sum som är summan av produkterna
