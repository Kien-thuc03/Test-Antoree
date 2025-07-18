import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <div className="mb-8 relative">
            <div className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-antoree-blue to-antoree-purple">404</div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-antoree-green-light/20 rounded-full animate-ping-slow"></div>
            <div className="absolute bottom-0 -left-4 w-12 h-12 bg-antoree-purple/20 rounded-full animate-ping-slow animation-delay-500"></div>
          </div>
          
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-antoree-purple w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-antoree-green mb-4">Không tìm thấy trang</h2>
          
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển sang địa chỉ khác.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-[#2933F2] to-[#C599F2] hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Quay về trang chủ
            </Link>
            
            <button 
              onClick={handleGoBack}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-antoree-blue text-base font-medium rounded-lg text-antoree-blue hover:bg-antoree-blue/5 transition-all duration-300 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Quay lại
            </button>
          </div>
          
          <div className="mt-12 text-gray-500 text-sm">
            <p>Bạn cần giúp đỡ? <Link to="/contact" className="text-antoree-blue hover:underline">Liên hệ hỗ trợ</Link></p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage; 