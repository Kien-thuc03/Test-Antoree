import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Product, FilterOptions } from '../types';
import { api } from '../services/api';

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  favoriteProducts: Product[];
  viewedProducts: Product[];
  suggestedProducts: Product[];
  loading: boolean;
  loadingSuggestions: boolean;
  error: string | null;
  filterOptions: FilterOptions;
  setFilterOptions: (options: FilterOptions) => void;
  toggleFavorite: (productId: string) => Promise<void>;
  viewProduct: (productId: string) => Promise<void>;
  getSuggestions: () => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [viewedProducts, setViewedProducts] = useState<Product[]>([]);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    searchQuery: '',
    priceRange: 'all',
    category: 'Tất cả'
  });

  // Lấy danh sách sản phẩm khi component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getProducts();
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Cập nhật danh sách sản phẩm khi filter thay đổi
  useEffect(() => {
    const filterProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let filtered = [...products];
        
        // Lọc theo danh mục
        if (filterOptions.category !== 'Tất cả') {
          filtered = filtered.filter(product => 
            product.category === filterOptions.category
          );
        }
        
        // Lọc theo khoảng giá
        if (filterOptions.priceRange !== 'all') {
          filtered = await api.filterProductsByPrice(filterOptions.priceRange);
        }
        
        // Lọc theo từ khóa tìm kiếm
        if (filterOptions.searchQuery.trim()) {
          filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(filterOptions.searchQuery.toLowerCase()) ||
            product.shortDescription.toLowerCase().includes(filterOptions.searchQuery.toLowerCase())
          );
        }
        
        setFilteredProducts(filtered);
        setLoading(false);
      } catch (err) {
        setError('Không thể lọc sản phẩm. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };

    if (products.length > 0) {
      filterProducts();
    }
  }, [filterOptions, products]);

  // Cập nhật danh sách sản phẩm yêu thích
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await api.getFavoriteProducts();
        setFavoriteProducts(favorites);
      } catch (err) {
        console.error('Không thể lấy danh sách yêu thích:', err);
      }
    };

    if (products.length > 0) {
      fetchFavorites();
    }
  }, [products]);

  // Cập nhật lịch sử xem
  useEffect(() => {
    const fetchViewHistory = async () => {
      try {
        const viewed = await api.getViewHistory();
        setViewedProducts(viewed);
      } catch (err) {
        console.error('Không thể lấy lịch sử xem:', err);
      }
    };

    if (products.length > 0) {
      fetchViewHistory();
    }
  }, [products]);

  // Toggle trạng thái yêu thích sản phẩm
  const toggleFavorite = async (productId: string) => {
    try {
      const result = await api.toggleFavorite(productId);
      if (result.success) {
        setProducts(prevProducts => 
          prevProducts.map(product => 
            product.id === productId 
              ? { ...product, isFavorite: !product.isFavorite } 
              : product
          )
        );
        
        // Cập nhật danh sách yêu thích
        setFavoriteProducts(await api.getFavoriteProducts());
      }
    } catch (err) {
      console.error('Không thể thay đổi trạng thái yêu thích:', err);
    }
  };

  // Thêm sản phẩm vào lịch sử xem
  const viewProduct = async (productId: string) => {
    try {
      await api.addToViewHistory(productId);
      // Cập nhật lịch sử xem
      setViewedProducts(await api.getViewHistory());
    } catch (err) {
      console.error('Không thể cập nhật lịch sử xem:', err);
    }
  };

  // Lấy gợi ý sản phẩm (AI)
  const getSuggestions = async () => {
    try {
      setLoadingSuggestions(true);
      const suggestions = await api.getSuggestions('1'); // User ID mặc định = 1
      setSuggestedProducts(suggestions);
      setLoadingSuggestions(false);
    } catch (err) {
      console.error('Không thể lấy gợi ý sản phẩm:', err);
      setLoadingSuggestions(false);
    }
  };

  const value = {
    products,
    filteredProducts,
    favoriteProducts,
    viewedProducts,
    suggestedProducts,
    loading,
    loadingSuggestions,
    error,
    filterOptions,
    setFilterOptions,
    toggleFavorite,
    viewProduct,
    getSuggestions
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}; 