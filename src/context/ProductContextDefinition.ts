import { createContext } from 'react';
import type { Product, FilterOptions } from '../types';

export interface ProductContextType {
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

export const ProductContext = createContext<ProductContextType | undefined>(undefined); 