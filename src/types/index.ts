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
  instructor?: string; // Giảng viên của khóa học (tùy chọn)
  duration?: string;   // Thời lượng khóa học hoặc thời hạn sử dụng (tùy chọn)
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
  priceRange: 'all' | 'under1m' | '1m-5m' | 'over5m';
  category: string;
} 