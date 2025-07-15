export interface Product {
  id: string;
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
  id: string;
  name: string;
  email: string;
  viewHistory: string[]; // Mảng id của sản phẩm đã xem
  favorites: string[]; // Mảng id của sản phẩm yêu thích
}

export interface FilterOptions {
  searchQuery: string;
  priceRange: 'all' | 'under500k' | '500k-1m' | 'over1m';
  category: string;
} 