import React from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface SuggestionSectionProps {
  onViewDetail: (productId: string) => void;
}

const SuggestionSection: React.FC<SuggestionSectionProps> = ({ onViewDetail }) => {
  const { suggestedProducts, loadingSuggestions, getSuggestions, toggleFavorite } = useProductContext();

  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <SparklesIcon className="w-6 h-6 text-blue-600 mr-2" />
          <h2 className="text-xl font-bold text-gray-900">Gợi ý khóa học cho bạn</h2>
        </div>
        <button
          onClick={() => getSuggestions()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          disabled={loadingSuggestions}
        >
          {loadingSuggestions ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Đang tải...
            </>
          ) : (
            'Gợi ý cho tôi'
          )}
        </button>
      </div>

      {suggestedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={toggleFavorite}
              onViewDetail={() => onViewDetail(product.id)}
            />
          ))}
        </div>
      ) : loadingSuggestions ? (
        <div className="py-12 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="h-64 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-10 text-center">
          <p className="text-gray-600 mb-4">
            Nhấn vào "Gợi ý cho tôi" để nhận các khóa học phù hợp dựa trên sở thích và lịch sử xem của bạn.
          </p>
          <p className="text-sm text-gray-500">
            Công nghệ AI của chúng tôi sẽ phân tích và đưa ra gợi ý tốt nhất cho bạn.
          </p>
        </div>
      )}
    </div>
  );
};

export default SuggestionSection; 