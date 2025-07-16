import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import { useProductContext } from '../hooks/useProductContext';
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/solid';
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
                  <div className="w-full md:w-auto">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full md:w-auto px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-antoree-blue focus:ring-2 focus:ring-antoree-blue/20 transition-all duration-300 outline-none"
                      title="Sắp xếp khóa học"
                      aria-label="Sắp xếp khóa học"
                    >
                      <option value="name">Sắp xếp theo tên</option>
                      <option value="price">Sắp xếp theo giá</option>
                      <option value="rating">Sắp xếp theo đánh giá</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Favorites Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetail={handleViewDetail}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="inline-flex justify-center items-center w-24 h-24 rounded-full bg-antoree-purple/10 mb-6">
                <HeartIcon className="w-12 h-12 text-antoree-purple" />
              </div>
              <h2 className="text-2xl font-bold text-antoree-green mb-4">Chưa có khóa học yêu thích</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Bạn chưa thêm khóa học nào vào danh sách yêu thích. Hãy khám phá các khóa học và thêm vào danh sách để xem lại sau.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-antoree-blue to-antoree-purple text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Khám phá khóa học</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
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