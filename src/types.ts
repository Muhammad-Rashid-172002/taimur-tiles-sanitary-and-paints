export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}
