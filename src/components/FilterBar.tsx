import React from 'react';
import { useProductContext } from '../context/ProductContext';
import { categories } from '../mocks/productData';

const FilterBar: React.FC = () => {
  const { filterOptions, setFilterOptions } = useProductContext();

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOptions({
      ...filterOptions,
      priceRange: e.target.value as 'all' | 'under500k' | '500k-1m' | 'over1m'
    });
  };

  const handleCategoryChange = (category: string) => {
    setFilterOptions({
      ...filterOptions,
      category
    });
  };

  return (
    <div className="container mx-auto bg-white shadow-md p-4 rounded-lg mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Danh mục:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  filterOptions.category === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Khoảng giá:</h3>
          <select
            value={filterOptions.priceRange}
            onChange={handlePriceChange}
            className="w-full md:w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            aria-label="Lọc theo khoảng giá"
          >
            <option value="all">Tất cả giá</option>
            <option value="under500k">Dưới 500.000đ</option>
            <option value="500k-1m">500.000đ - 1.000.000đ</option>
            <option value="over1m">Trên 1.000.000đ</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar; 