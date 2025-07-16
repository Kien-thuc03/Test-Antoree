import React, { useState } from 'react';
import { useProductContext } from '../hooks/useProductContext';
import { categories } from '../mocks/productData';
import { FunnelIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const FilterBar: React.FC = () => {
  const { filterOptions, setFilterOptions } = useProductContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOptions({
      ...filterOptions,
      priceRange: e.target.value as 'all' | 'under1m' | '1m-5m' | 'over5m'
    });
  };

  const handleCategoryChange = (category: string) => {
    setFilterOptions({
      ...filterOptions,
      category
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tìm kiếm:', searchQuery);
    // Implement search logic here
  };

  return (
    <div className="sticky top-20 z-40 bg-white shadow-md border-b border-gray-200 animate-slide-in-down">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm khóa học..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-antoree-blue focus:ring-2 focus:ring-antoree-blue/20 transition-all duration-300 outline-none shadow-sm hover:shadow-md"
              />
            </form>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-antoree-green/5 rounded-lg hover:bg-antoree-green/10 transition-colors duration-300"
          >
            <AdjustmentsHorizontalIcon className="w-5 h-5 text-antoree-green" />
            <span className="font-medium text-antoree-green">Lọc</span>
          </button>

          {/* Desktop Filters */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Category Filter */}
            <div className="flex items-center space-x-3">
              <FunnelIcon className="w-5 h-5 text-antoree-green" />
              <span className="text-sm font-medium text-antoree-green">Danh mục:</span>
              <div className="flex items-center space-x-2">
                {categories.slice(0, 4).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      filterOptions.category === category
                        ? 'bg-gradient-to-r from-antoree-blue to-antoree-purple text-white shadow-md'
                        : 'bg-antoree-green/5 text-antoree-green hover:bg-antoree-green/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                {categories.length > 4 && (
                  <button className="px-4 py-2 rounded-full text-sm font-medium bg-antoree-green/5 text-antoree-green hover:bg-antoree-green/10 transition-all duration-300">
                    +{categories.length - 4}
                  </button>
                )}
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-antoree-green">Giá:</span>
              <select
                value={filterOptions.priceRange}
                onChange={handlePriceChange}
                className="bg-white border-2 border-gray-200 text-antoree-green text-sm rounded-lg focus:ring-2 focus:ring-antoree-blue focus:border-antoree-blue py-2 px-3 transition-all duration-300 outline-none shadow-sm hover:shadow-md"
                aria-label="Lọc theo khoảng giá"
              >
                <option value="all">Tất cả</option>
                <option value="under1m">Dưới 1.000.000đ</option>
                <option value="1m-5m">1.000.000đ - 5.000.000đ</option>
                <option value="over5m">Trên 5.000.000đ</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        <div className={`lg:hidden mt-4 transition-all duration-300 overflow-hidden ${
          isFilterOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-4 p-4 bg-antoree-green/5 rounded-lg">
            {/* Mobile Categories */}
            <div>
              <h3 className="text-sm font-medium text-antoree-green mb-3">Danh mục:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filterOptions.category === category
                        ? 'bg-gradient-to-r from-antoree-blue to-antoree-purple text-white shadow-md'
                        : 'bg-white text-antoree-green hover:bg-antoree-green/10 border border-antoree-green/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Price Filter */}
            <div>
              <h3 className="text-sm font-medium text-antoree-green mb-3">Khoảng giá:</h3>
              <select
                value={filterOptions.priceRange}
                onChange={handlePriceChange}
                className="w-full bg-white border-2 border-gray-200 text-antoree-green text-sm rounded-lg focus:ring-2 focus:ring-antoree-blue focus:border-antoree-blue py-3 px-4 transition-all duration-300 outline-none"
                aria-label="Lọc theo khoảng giá"
              >
                <option value="all">Tất cả giá</option>
                <option value="under1m">Dưới 1.000.000đ</option>
                <option value="1m-5m">1.000.000đ - 5.000.000đ</option>
                <option value="over5m">Trên 5.000.000đ</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar; 