import React from 'react';

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 bg-gray-200 relative">
        <div className="absolute top-3 left-3 w-16 h-6 bg-gray-300 rounded-full"></div>
        <div className="absolute top-3 right-3 w-10 h-10 bg-gray-300 rounded-full"></div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-6">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        
        {/* Description */}
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex space-x-1 mr-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-4 bg-gray-200 rounded w-12"></div>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-gray-200 rounded w-20"></div>
          <div className="h-6 bg-gray-200 rounded w-12"></div>
        </div>
        
        {/* Button */}
        <div className="h-12 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
