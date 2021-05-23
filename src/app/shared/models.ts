export interface Restaurant {
  id: string;
  name: string;
  address: string;
  logo: string;
}

export interface Product {
  productName: string;
  productIngredients: string;
  productPrice: number;
  availability: boolean;
  restaurantId: string;
  restaurantAddress: string;
  bioFlag: boolean;
  glutenFreeFlag: boolean;
  veganFlag: boolean;
  categoryProduct: string;
  discValuePerc: number;
  productDiscPrice: number;
  // restaurant: Restaurant;
}

export interface MenuSection {
  category: string;
  products: Product[];
}

export interface Category {
  name: string;
  image: string;
}
