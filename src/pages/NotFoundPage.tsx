import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-bold text-antoree-blue">404</h1>
          <h2 className="text-2xl font-semibold text-antoree-green mt-4">Không tìm thấy trang</h2>
          <p className="text-gray-600 mt-2 mb-8">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển sang địa chỉ khác.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-[#2933F2] to-[#C599F2] hover:shadow-lg transition-all duration-300"
          >
            Quay về trang chủ
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage; 