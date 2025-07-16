import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';
import ProductDetailModal from '../components/ProductDetailModal';
import SuggestionSection from '../components/SuggestionSection';
import ViewHistorySection from '../components/ViewHistorySection';
import { useProductContext } from '../hooks/useProductContext';
import type { Product } from '../types';
import bgImage from '../assets/images/HandDrawnDoodle.png';

const HomePage: React.FC = () => {
  const { viewProduct, toggleFavorite } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    viewProduct(product.id);
  };

  const handleProductIdDetail = (productId: string) => {
    const fakeProduct: Product = {
      id: productId,
      name: 'Khóa học',
      price: 0,
      imageUrl: '',
      shortDescription: '',
      description: '',
      category: '',
      isFavorite: false,
      rating: 0,
      reviewCount: 0
    };
    handleViewDetail(fakeProduct);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleFavorite = (productId: string) => {
    toggleFavorite(productId);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tìm kiếm:', searchQuery);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-antoree-green overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-fixed bg-no-repeat bg-cover bg-center opacity-20 z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-antoree-green-light mb-6 leading-tight font-display">
              Antoree - Nâng cao khả năng
              <span className="block text-white">ngôn ngữ của bạn</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Tìm kiếm và học tập với hàng nghìn khóa học chất lượng cao từ các giáo viên hàng đầu.
            </p>
            
            <div className="relative max-w-2xl mx-auto mb-16">
              <form onSubmit={handleSearch} className="flex items-center glass rounded-2xl p-2 shadow-lifted">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm khóa học, giáo viên..." 
                  className="flex-1 bg-transparent text-white placeholder-gray-300 px-6 py-4 rounded-l-2xl focus:outline-none text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-antoree-blue to-antoree-purple text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Tìm kiếm</span>
                </button>
              </form>
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <p className="text-sm text-gray-400 italic">
                  Gợi ý: "Tiếng Anh giao tiếp", "IELTS", "Ngữ pháp cơ bản"
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-14">
              <div className="text-center">
                <div className="text-3xl font-bold text-antoree-green-light mb-2">10K+</div>
                <div className="text-gray-300 text-sm">Khóa học</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-antoree-green-light mb-2">500+</div>
                <div className="text-gray-300 text-sm">Giáo viên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-antoree-green-light mb-2">50K+</div>
                <div className="text-gray-300 text-sm">Học viên</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#f9fafb">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>
      
      <main className="flex-grow bg-gray-100">
        {/* Filter Section */}
        <FilterBar />
        
        <div className="container mx-auto px-4 py-8">
          {/* Suggestion Section */}
          <section className="mb-16 animate-slide-in-up">
            <SuggestionSection onViewDetail={handleProductIdDetail} />
          </section>
          
          {/* View History Section */}
          <section className="mb-16 animate-slide-in-up">
            <ViewHistorySection onViewDetail={handleViewDetail} />
          </section>
          
          {/* Featured Courses */}
          <section className="mb-16 animate-slide-in-up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-antoree-green mb-2 font-display">
                  Khóa học nổi bật
                </h2>
                <p className="text-gray-600">Những khóa học được đánh giá cao nhất</p>
              </div>
              <button className="group flex items-center space-x-2 text-antoree-blue hover:text-antoree-purple font-medium transition-colors duration-300">
                <span>Xem tất cả</span>
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <ProductGrid onViewDetail={handleViewDetail} />
          </section>
          
          {/* CTA Section */}
          <section className="mb-16 animate-slide-in-up">
            <div className="bg-gradient-to-r from-antoree-blue to-antoree-purple rounded-3xl overflow-hidden shadow-lifted">
              <div className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
                  Bắt đầu hành trình học tập ngay hôm nay
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Đăng ký tài khoản để nhận ưu đãi đặc biệt và truy cập vào hàng nghìn khóa học chất lượng cao
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-antoree-blue font-medium px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Đăng ký miễn phí
                  </button>
                  <button className="border-2 border-white text-white font-medium px-8 py-4 rounded-xl hover:bg-white hover:text-antoree-blue transition-all duration-300">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            </div>
          </section>
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