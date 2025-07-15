import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import { useProductContext } from '../hooks/useProductContext';
import { HeartIcon } from '@heroicons/react/24/solid';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

const FavoritesPage: React.FC = () => {
  const { favoriteProducts, viewProduct, toggleFavorite } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    viewProduct(product.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <HeartIcon className="w-6 h-6 text-red-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Khóa học yêu thích</h1>
        </div>

        {favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleFavorite={toggleFavorite}
                onViewDetail={handleViewDetail}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
              <HeartIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Chưa có khóa học yêu thích</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Bạn chưa thêm khóa học nào vào danh sách yêu thích. Khám phá các khóa học và thêm vào danh sách để xem sau.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Khám phá khóa học
            </Link>
          </div>
        )}
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