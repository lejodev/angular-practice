export interface Product {
  id: number;
  title: number;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number
  }
}
