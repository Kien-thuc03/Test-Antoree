export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  isFavorite: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  viewHistory: number[]; // Mảng id của sản phẩm đã xem
  favorites: number[]; // Mảng id của sản phẩm yêu thích
}

export interface FilterOptions {
  searchQuery: string;
  priceRange: 'all' | 'under500k' | '500k-1m' | 'over1m';
  category: string;
} 