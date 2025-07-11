import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';
import ProductDetailModal from '../components/ProductDetailModal';
import SuggestionSection from '../components/SuggestionSection';
import ViewHistorySection from '../components/ViewHistorySection';
import { useProductContext } from '../context/ProductContext';
import type { Product } from '../types';

const HomePage: React.FC = () => {
  const { viewProduct, toggleFavorite } = useProductContext();
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

  const handleToggleFavorite = (productId: number) => {
    toggleFavorite(productId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">EduTech Hub - Khám phá thế giới tri thức</h1>
          <p className="text-gray-600">Tìm kiếm và học tập với hàng nghìn khóa học chất lượng cao từ các chuyên gia hàng đầu.</p>
        </div>
        
        <FilterBar />
        
        <SuggestionSection onViewDetail={handleViewDetail} />
        
        <ViewHistorySection onViewDetail={handleViewDetail} />
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Khóa học nổi bật</h2>
          </div>
          <ProductGrid onViewDetail={handleViewDetail} />
        </div>
      </main>
      
      <Footer />
      
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default HomePage; 