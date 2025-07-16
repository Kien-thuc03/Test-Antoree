import React, { useState, useEffect, useRef } from 'react';
import { useProductContext } from '../hooks/useProductContext';
import { categories } from '../mocks/productData';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FilterBar: React.FC = () => {
  const { filterOptions, setFilterOptions, applyFilters } = useProductContext();
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handlePriceChange = (value: string) => {
    const newFilterOptions = {
      ...filterOptions,
      priceRange: value as 'all' | 'under1m' | '1m-5m' | 'over5m'
    };
    setFilterOptions(newFilterOptions);
    applyFilters(newFilterOptions);
    setIsPriceDropdownOpen(false);
  };

  const handleCategoryChange = (category: string) => {
    const newFilterOptions = {
      ...filterOptions,
      category
    };
    setFilterOptions(newFilterOptions);
    applyFilters(newFilterOptions);
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsPriceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getPriceLabel = (value: string) => {
    switch (value) {
      case 'under1m': return 'Dưới 1.000.000đ';
      case '1m-5m': return '1.000.000đ - 5.000.000đ';
      case 'over5m': return 'Trên 5.000.000đ';
      default: return 'Tất cả';
    }
  };

  const getMobilePriceLabel = (value: string) => {
    switch (value) {
      case 'under1m': return 'Dưới 1tr';
      case '1m-5m': return '1tr-5tr';
      case 'over5m': return 'Trên 5tr';
      default: return 'Tất cả';
    }
  };

  return (
    <div className="sticky top-20 z-40 bg-white border-b border-gray-100 animate-slide-in-down">
      <div className="container mx-auto px-4 py-3">
        {/* Desktop View */}
        <div className="hidden md:flex flex-wrap items-center justify-between">
          {/* Category Pills */}
          <div className="flex items-center flex-wrap gap-2 my-4">
            {categories.slice(0, 6).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filterOptions.category === category
                    ? 'bg-[#4951F2] text-white'
                    : 'bg-white text-[#06261D] border border-gray-200 hover:border-[#4951F2]/30'
                }`}
              >
                {category}
              </button>
            ))}
            {categories.length > 6 && (
              <button 
                className="px-4 py-2 rounded-full text-sm font-medium text-[#C599F2] border border-[#C599F2]/30 hover:bg-[#C599F2]/5"
              >
                +{categories.length - 6} Khác
              </button>
            )}
          </div>

          {/* Price Filter - Custom Dropdown */}
          <div className="relative ml-auto" ref={dropdownRef}>
            <div className="flex items-center">
              <span className="text-sm font-medium text-[#06261D] mr-2">Giá:</span>
              <button 
                className="flex items-center justify-between bg-white border border-gray-200 text-[#06261D] text-sm rounded-lg py-2 px-3 min-w-[160px] hover:border-[#4951F2]/30 focus:outline-none"
                onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
              >
                <span>{getPriceLabel(filterOptions.priceRange)}</span>
                <ChevronDownIcon className={`w-4 h-4 ml-2 transition-transform ${isPriceDropdownOpen ? 'transform rotate-180' : ''}`} />
              </button>
            </div>
            
            {isPriceDropdownOpen && (
              <div className="absolute right-0 mt-1 w-full min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  <button 
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer ${filterOptions.priceRange === 'all' ? 'text-[#4951F2] font-medium' : 'text-[#06261D]'}`}
                    onClick={() => handlePriceChange('all')}
                  >
                    Tất cả
                  </button>
                  <button 
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer ${filterOptions.priceRange === 'under1m' ? 'text-[#4951F2] font-medium' : 'text-[#06261D]'}`}
                    onClick={() => handlePriceChange('under1m')}
                  >
                    Dưới 1.000.000đ
                  </button>
                  <button 
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer ${filterOptions.priceRange === '1m-5m' ? 'text-[#4951F2] font-medium' : 'text-[#06261D]'}`}
                    onClick={() => handlePriceChange('1m-5m')}
                  >
                    1.000.000đ - 5.000.000đ
                  </button>
                  <button 
                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer ${filterOptions.priceRange === 'over5m' ? 'text-[#4951F2] font-medium' : 'text-[#06261D]'}`}
                    onClick={() => handlePriceChange('over5m')}
                  >
                    Trên 5.000.000đ
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex overflow-x-auto items-center pb-2 gap-2 hide-scrollbar">
          {categories.slice(0, 5).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                filterOptions.category === category
                  ? 'bg-[#4951F2] text-white'
                  : 'bg-white text-[#06261D] border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
          <button className="px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0 text-[#C599F2] border border-[#C599F2]/30">
            +{categories.length - 5} Khác
          </button>
          
          {/* Mobile Price Filter - Custom Dropdown */}
          <div className="ml-auto flex-shrink-0 relative">
            <button
              onClick={() => setIsPriceDropdownOpen(!isPriceDropdownOpen)}
              className="flex items-center space-x-1 bg-white border border-gray-200 text-[#06261D] text-xs rounded-full py-1.5 px-3"
              aria-label="Lọc theo giá"
            >
              <span>{getMobilePriceLabel(filterOptions.priceRange)}</span>
              <ChevronDownIcon className={`w-3 h-3 transition-transform ${isPriceDropdownOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
            {isPriceDropdownOpen && (
              <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                <div className="py-1">
                  <button 
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 cursor-pointer ${filterOptions.priceRange === 'all' ? 'text-[#4951F2] font-medium' : 'text-[#06261D]'}`}
                    onClick={() => handlePriceChange('all')}
                  >
                    Tất cả
                  </button>
                  <button 
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 cursor-pointer ${filterOptions.priceRange === 'under1m' ? 'text-[#4951F2] font-medium' : 'text-[#06261D]'}`}
                    onClick={() => handlePriceChange('under1m')}
                  >
                    Dưới 1tr
                  </button>
                  <button 
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 cursor-pointer ${filterOptions.priceRange === '1m-5m' ? 'text-[#4951F2] font-medium' : 'text-[#06261D]'}`}
                    onClick={() => handlePriceChange('1m-5m')}
                  >
                    1tr - 5tr
                  </button>
                  <button 
                    className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 cursor-pointer ${filterOptions.priceRange === 'over5m' ? 'text-[#4951F2] font-medium' : 'text-[#06261D]'}`}
                    onClick={() => handlePriceChange('over5m')}
                  >
                    Trên 5tr
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Thêm style cho scrollbar
const style = document.createElement('style');
style.textContent = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);

export default FilterBar; 