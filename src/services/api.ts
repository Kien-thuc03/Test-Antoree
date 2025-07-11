import type { Product } from '../types';
import { products, user } from '../mocks/productData';

// Giả lập việc gọi API với độ trễ để mô phỏng network request
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Lấy danh sách sản phẩm
  getProducts: async (): Promise<Product[]> => {
    await delay(800); // Giả lập độ trễ API
    return products;
  },

  // Tìm kiếm sản phẩm theo tên
  searchProducts: async (query: string): Promise<Product[]> => {
    await delay(500);
    const searchQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(searchQuery) || 
      product.shortDescription.toLowerCase().includes(searchQuery)
    );
  },

  // Lọc sản phẩm theo giá
  filterProductsByPrice: async (priceRange: string): Promise<Product[]> => {
    await delay(500);
    switch(priceRange) {
      case 'under500k':
        return products.filter(product => product.price < 500000);
      case '500k-1m':
        return products.filter(product => product.price >= 500000 && product.price <= 1000000);
      case 'over1m':
        return products.filter(product => product.price > 1000000);
      default:
        return products;
    }
  },

  // Lấy chi tiết sản phẩm
  getProductById: async (productId: number): Promise<Product | undefined> => {
    await delay(300);
    return products.find(product => product.id === productId);
  },

  // Gợi ý sản phẩm (AI)
  getSuggestions: async (userId: number): Promise<Product[]> => {
    await delay(1200); // Tăng độ trễ cho chức năng AI
    
    // Giả lập logic AI gợi ý dựa trên lịch sử xem và yêu thích của người dùng
    const currentUser = { ...user, id: userId };
    
    if (currentUser.viewHistory.length === 0 && currentUser.favorites.length === 0) {
      // Nếu chưa có lịch sử xem hoặc yêu thích, trả về các sản phẩm có rating cao
      return products
        .filter(product => product.rating >= 4.7)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
    }
    
    // Nếu có lịch sử xem hoặc yêu thích, tìm các sản phẩm tương tự
    const viewedProducts = products.filter(p => currentUser.viewHistory.includes(p.id));
    const favoriteProducts = products.filter(p => currentUser.favorites.includes(p.id));
    
    const viewedCategories = new Set(viewedProducts.map(p => p.category));
    const favoriteCategories = new Set(favoriteProducts.map(p => p.category));
    
    // Ưu tiên sản phẩm cùng danh mục với sản phẩm đã yêu thích
    if (favoriteCategories.size > 0) {
      const suggestions = products.filter(
        p => [...favoriteCategories].includes(p.category) && 
        !currentUser.viewHistory.includes(p.id) && 
        !currentUser.favorites.includes(p.id)
      );
      
      if (suggestions.length >= 4) {
        return suggestions.slice(0, 4);
      }
      
      // Nếu không đủ, bổ sung bằng sản phẩm cùng danh mục với lịch sử xem
      return [
        ...suggestions,
        ...products.filter(
          p => [...viewedCategories].includes(p.category) && 
          !currentUser.viewHistory.includes(p.id) && 
          !currentUser.favorites.includes(p.id) &&
          !suggestions.map(s => s.id).includes(p.id)
        )
      ].slice(0, 4);
    }
    
    // Nếu không có sản phẩm yêu thích, đề xuất dựa trên lịch sử xem
    if (viewedCategories.size > 0) {
      return products.filter(
        p => [...viewedCategories].includes(p.category) && 
        !currentUser.viewHistory.includes(p.id)
      ).slice(0, 4);
    }
    
    // Fallback: trả về sản phẩm có rating cao
    return products
      .filter(product => product.rating >= 4.7)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
  },
  
  // Đánh dấu/bỏ đánh dấu sản phẩm yêu thích
  toggleFavorite: async (productId: number): Promise<{ success: boolean }> => {
    await delay(300);
    const index = products.findIndex(product => product.id === productId);
    if (index !== -1) {
      products[index].isFavorite = !products[index].isFavorite;
      
      // Cập nhật danh sách yêu thích cho user
      if (products[index].isFavorite) {
        user.favorites.push(productId);
      } else {
        const favIndex = user.favorites.indexOf(productId);
        if (favIndex !== -1) {
          user.favorites.splice(favIndex, 1);
        }
      }
      
      return { success: true };
    }
    return { success: false };
  },
  
  // Thêm sản phẩm vào lịch sử xem
  addToViewHistory: async (productId: number): Promise<{ success: boolean }> => {
    await delay(200);
    const index = products.findIndex(product => product.id === productId);
    if (index !== -1) {
      if (!user.viewHistory.includes(productId)) {
        user.viewHistory.push(productId);
      }
      return { success: true };
    }
    return { success: false };
  },
  
  // Lấy danh sách sản phẩm yêu thích
  getFavoriteProducts: async (): Promise<Product[]> => {
    await delay(500);
    return products.filter(product => product.isFavorite);
  },
  
  // Lấy lịch sử xem
  getViewHistory: async (): Promise<Product[]> => {
    await delay(500);
    return products.filter(product => user.viewHistory.includes(product.id));
  }
}; 