import React from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import { ClockIcon } from '@heroicons/react/24/outline';
import type { Product } from '../types';

interface ViewHistorySectionProps {
  onViewDetail: (product: Product) => void;
}

const ViewHistorySection: React.FC<ViewHistorySectionProps> = ({ onViewDetail }) => {
  const { viewedProducts, toggleFavorite } = useProductContext();

  if (viewedProducts.length === 0) return null;

  return (
    <div className="mb-10">
      <div className="flex items-center mb-4">
        <ClockIcon className="w-6 h-6 text-gray-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-900">Đã xem gần đây</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {viewedProducts.slice(0, 4).map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onToggleFavorite={toggleFavorite}
            onViewDetail={onViewDetail}
          />
        ))}
      </div>
    </div>
  );
};

export default ViewHistorySection; 