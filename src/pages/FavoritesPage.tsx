import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import { useProductContext } from '../hooks/useProductContext';
import { HeartIcon, SparklesIcon, FunnelIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

const FavoritesPage: React.FC = () => {
  const { favoriteProducts, viewProduct, toggleFavorite } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    viewProduct(product.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredProducts = favoriteProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.price - b.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-antoree-purple via-antoree-blue to-antoree-blue-light text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="flex items-center justify-center mb-4">
                <HeartIcon className="w-12 h-12 text-antoree-purple mr-3" />
                <SparklesIcon className="w-8 h-8 text-antoree-green-light" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                Khóa học yêu thích
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Những khóa học bạn đã lưu để học sau. Tổng cộng {favoriteProducts.length} khóa học được yêu thích.
              </p>
              
              {favoriteProducts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">{favoriteProducts.length}</div>
                    <div className="text-blue-100 text-sm">Khóa học</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">
                      {favoriteProducts.reduce((total, product) => total + product.price, 0).toLocaleString()}đ
                    </div>
                    <div className="text-blue-100 text-sm">Tổng giá trị</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">
                      {(favoriteProducts.reduce((total, product) => total + product.rating, 0) / favoriteProducts.length).toFixed(1)}
                    </div>
                    <div className="text-blue-100 text-sm">Đánh giá TB</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          {favoriteProducts.length > 0 ? (
            <>
              {/* Search and Filter Bar */}
              <div className="bg-antoree-green/5 rounded-2xl shadow-soft p-6 mb-8 animate-slide-in-up">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="flex-1 relative">
                    <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Tìm kiếm trong danh sách yêu thích..."
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-antoree-blue focus:ring-2 focus:ring-antoree-blue/20 transition-all duration-300 outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <FunnelIcon className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700">Sắp xếp:</span>
                    </div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white border-2 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-antoree-blue focus:border-antoree-blue py-2 px-3 transition-all duration-300 outline-none"
                      title="Sắp xếp khóa học"
                      aria-label="Sắp xếp khóa học theo"
                    >
                      <option value="name">Tên A-Z</option>
                      <option value="price">Giá thấp đến cao</option>
                      <option value="rating">Đánh giá cao nhất</option>
                    </select>
                  </div>
                </div>

                {searchQuery && (
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <span>Tìm thấy {filteredProducts.length} kết quả cho "{searchQuery}"</span>
                    {filteredProducts.length !== favoriteProducts.length && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-antoree-blue hover:text-antoree-purple font-medium"
                      >
                        Xóa bộ lọc
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-slide-in-up">
                {sortedProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className={`animate-scale-in delay-${index % 4}`}
                  >
                    <ProductCard
                      product={product}
                      onToggleFavorite={toggleFavorite}
                      onViewDetail={handleViewDetail}
                    />
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && searchQuery && (
                <div className="text-center py-16 bg-antoree-green/5 rounded-2xl shadow-soft animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-antoree-purple/10 rounded-full">
                    <MagnifyingGlassIcon className="w-8 h-8 text-antoree-purple" />
                  </div>
                  <h2 className="text-xl font-semibold text-antoree-green mb-2">Không tìm thấy kết quả</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Không có khóa học nào phù hợp với từ khóa "{searchQuery}". Thử tìm kiếm với từ khóa khác.
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn-primary"
                  >
                    Xóa bộ lọc
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 bg-antoree-green/5 rounded-2xl shadow-soft animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-r from-antoree-purple/20 to-antoree-blue/20 rounded-full">
                <HeartIcon className="w-10 h-10 text-antoree-purple" />
              </div>
              <h2 className="text-2xl font-semibold text-antoree-green mb-4 font-display">
                Chưa có khóa học yêu thích
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                Bạn chưa thêm khóa học nào vào danh sách yêu thích. Khám phá các khóa học tuyệt vời và lưu lại những khóa học bạn quan tâm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/" 
                  className="btn-primary"
                >
                  <SparklesIcon className="w-5 h-5 mr-2" />
                  Khám phá khóa học
                </Link>
                <Link 
                  to="/" 
                  className="btn-secondary"
                >
                  Xem khóa học phổ biến
                </Link>
              </div>
            </div>
          )}

          {/* Additional Actions */}
          {favoriteProducts.length > 0 && (
            <div className="mt-12 bg-gradient-to-r from-antoree-blue to-antoree-purple rounded-2xl p-8 text-center text-white animate-slide-in-up">
              <h3 className="text-2xl font-bold mb-4 font-display">
                Sẵn sàng bắt đầu học?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Bạn đã có {favoriteProducts.length} khóa học trong danh sách yêu thích. Hãy bắt đầu hành trình học tập ngay hôm nay!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-antoree-blue font-medium px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                  Tạo lộ trình học tập
                </button>
                <Link
                  to="/"
                  className="border-2 border-white text-white font-medium px-8 py-3 rounded-lg hover:bg-white hover:text-antoree-blue transition-all duration-300"
                >
                  Khám phá thêm khóa học
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default FavoritesPage; 