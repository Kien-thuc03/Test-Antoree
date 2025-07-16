import React, { useState } from 'react';
import type { Product } from '../types';
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { formatCurrency } from '../utils/formatters';

interface ProductCardProps {
  product: Product;
  onToggleFavorite: (productId: string) => void;
  onViewDetail: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onToggleFavorite, onViewDetail }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(product.id);
  };

  const handleCardClick = () => {
    onViewDetail(product);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const isFilled = index < Math.floor(rating);
      return (
        <StarIcon
          key={index}
          className={`w-4 h-4 ${isFilled ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        />
      );
    });
  };

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-soft hover:shadow-lifted overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        {/* Loading Skeleton */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        )}
        
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-70'
        }`}>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#2933F2] to-[#C599F2] text-white shadow-md">
            {product.category}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 ${
            product.isFavorite ? 'text-antoree-purple' : 'text-gray-600'
          }`}
          aria-label={product.isFavorite ? "Bỏ yêu thích" : "Yêu thích"}
        >
          {product.isFavorite ? (
            <HeartIconSolid className="w-5 h-5" />
          ) : (
            <HeartIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-antoree-green mb-2 line-clamp-2 group-hover:text-antoree-blue transition-colors duration-300">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Rating & Reviews */}
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-3">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>

        {/* Price & Action */}
        <div className="flex flex-col space-y-1 mb-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-antoree-blue">
              {formatCurrency(product.price)}
            </span>
            
            <div className="flex items-center text-sm text-antoree-green">
              <span className="bg-antoree-green-light px-2 py-1 rounded-full font-medium">
                -33%
              </span>
            </div>
          </div>
          
          <div className="text-xs text-gray-400 line-through">
            {formatCurrency(product.price * 1.5)}
          </div>
        </div>

        {/* Action Button */}
        <button
          className="w-full bg-gradient-to-r from-[#4951F2] to-[#C599F2] text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetail(product);
          }}
        >
          <span>Xem chi tiết</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hover Effect Highlight */}
      <div className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-300 ${
        isHovered ? 'border-antoree-blue/20 shadow-glow' : ''
      }`}></div>
    </div>
  );
};

export default ProductCard; 