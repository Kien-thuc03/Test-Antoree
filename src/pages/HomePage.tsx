import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterBar from '../components/FilterBar';
import ProductGrid from '../components/ProductGrid';
import ProductDetailModal from '../components/ProductDetailModal';
import SuggestionSection from '../components/SuggestionSection';
import ViewHistorySection from '../components/ViewHistorySection';
import { useProductContext } from '../hooks/useProductContext';
import type { Product } from '../types';
// Sử dụng banner trong component
import bgImage from '../assets/images/HandDrawnDoodle.png';

const HomePage: React.FC = () => {
  const { viewProduct, toggleFavorite } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Theo dõi scroll để thêm hiệu ứng
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    viewProduct(product.id);
  };

  // Handler riêng cho SuggestionSection để phù hợp với kiểu dữ liệu
  const handleProductIdDetail = (productId: string) => {
    // Tạo fake product với đầy đủ thuộc tính theo yêu cầu của type Product
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
    // Thêm logic tìm kiếm ở đây
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section với background image */}
      <section className="relative bg-[#06261D] overflow-hidden pb-24">
        <div 
          className="absolute inset-0 bg-fixed bg-no-repeat bg-cover bg-center opacity-30 z-0 transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[#57F27E] mb-4 leading-tight">
              Antoree - Năng cao khả năng ngôn ngữ của bạn
            </h1>
            <p className="text-lg text-[#57F27E] mb-12">
              Tìm kiếm và học tập với hàng nghìn khóa học chất lượng cao từ các giáo viên hàng đầu.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <form onSubmit={handleSearch} className="flex items-center transition-all duration-300 transform hover:scale-[1.02]">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm khóa học" 
                  className="w-full h-full p-4 rounded-l-lg border-r-0 border-gray-300 shadow-lg focus:ring-2 focus:ring-[#57F27E] focus:border-[#57F27E] bg-white/95 text-gray-800 placeholder-gray-500" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  title="Tìm kiếm"
                  type="submit" 
                  className="bg-[#57F27E] hover:bg-[#3ed066] text-[#06261D] font-medium p-4 px-8 rounded-r-lg transition-colors duration-300 shadow-lg flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
              <div className="absolute -bottom-6 left-0 right-0 mx-auto text-center">
                <span className="text-xs text-[#57F27E]/80 italic">Gợi ý: Tiếng Anh, Cô Nguyễn Thị Hạnh, Khóa học tiếng Anh lớp 12...</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>
      
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Filter Section */}
          <section className={`sticky top-0 z-30 bg-white py-4 shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <FilterBar />
          </section>
          
          {/* Suggestion Section */}
          <section className="mb-12 mt-8 transform transition-all duration-500 hover:translate-y-[-5px]">
            <SuggestionSection onViewDetail={handleProductIdDetail} />
          </section>
          
          {/* View History Section */}
          <section className="mb-12 transform transition-all duration-500 hover:translate-y-[-5px]">
            <ViewHistorySection onViewDetail={handleViewDetail} />
          </section>
          
          {/* Featured Courses */}
          <section className="mb-12 pb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-600 mr-3 rounded"></span>
                Khóa học nổi bật
              </h2>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center group">
                Xem tất cả
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <ProductGrid onViewDetail={handleViewDetail} />
          </section>
          
          {/* CTA Section */}
          <section className="mb-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Bắt đầu hành trình học tập của bạn ngay hôm nay</h2>
                <p className="text-blue-100 mb-0">Đăng ký tài khoản để nhận ưu đãi đặc biệt dành cho học viên mới</p>
              </div>
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-md transform hover:scale-105 whitespace-nowrap">
                Đăng ký ngay
              </button>
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