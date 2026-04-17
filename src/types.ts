export type Category =
  | 'bread'
  | 'meat'
  | 'cheese'
  | 'sweets'
  | 'drinks'
  | 'wine'
  | 'preserves'
  | 'spices';

export interface Product {
  id: string;
  name: string;
  nameArm?: string;
  category: Category;
  price: number;
  unit: string;
  description: string;
  emoji: string;
  accent?: 'pomegranate' | 'gold' | 'leaf' | 'burgundy';
  tag?: string;
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
