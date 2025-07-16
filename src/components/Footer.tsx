import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartIcon, 
  AcademicCapIcon, 
  ChatBubbleLeftRightIcon,
  CubeTransparentIcon,
  GlobeAsiaAustraliaIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-[#2933F2] to-[#C599F2] p-2 rounded-lg">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-antoree-green-light">Antoree</h3>
                <p className="text-sm text-gray-400">Education Platform</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Nền tảng giáo dục trực tuyến hàng đầu Việt Nam, cung cấp các khóa học chất lượng cao từ các chuyên gia hàng đầu trong lĩnh vực ngôn ngữ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group" title="Facebook" aria-label="Facebook">
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-antoree-blue transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group" title="Twitter" aria-label="Twitter">
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-antoree-blue transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group" title="Instagram" aria-label="Instagram">
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-antoree-blue transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
              <a href="#" className="group" title="LinkedIn" aria-label="LinkedIn">
                <div className="bg-gray-800 p-3 rounded-lg hover:bg-brand-blue transition-colors duration-300">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          {/* Learning Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <GlobeAsiaAustraliaIcon className="w-5 h-5 mr-2 text-brand-light" />
              Danh mục học tập
            </h3>
            <ul className="space-y-3">
              {[
                'Tiếng Anh giao tiếp',
                'IELTS/TOEFL',
                'Tiếng Anh thương mại',
                'Ngữ pháp cơ bản',
                'Phát âm & nghe',
                'Từ vựng nâng cao'
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-brand-light transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-light rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <ShieldCheckIcon className="w-5 h-5 mr-2 text-brand-light" />
              Hỗ trợ học viên
            </h3>
            <ul className="space-y-3">
              {[
                'Trung tâm hỗ trợ',
                'Hướng dẫn học tập',
                'Chính sách hoàn tiền',
                'Điều khoản sử dụng',
                'Chính sách bảo mật',
                'Câu hỏi thường gặp'
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to="/" 
                    className="text-gray-300 hover:text-brand-light transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-brand-light rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2 text-brand-light" />
              Liên hệ & Cập nhật
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-brand-blue/20 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">123 Đường Nguyễn Huệ</p>
                  <p className="text-gray-400 text-xs">Quận 1, TP.HCM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-brand-blue/20 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">(028) 3800 1234</p>
                  <p className="text-gray-400 text-xs">Hỗ trợ 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-brand-blue/20 p-2 rounded-lg">
                  <svg className="w-4 h-4 text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">support@antoree.vn</p>
                  <p className="text-gray-400 text-xs">Email hỗ trợ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-sm font-medium text-white mb-3">📧 Nhận thông báo khóa học mới</h4>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Nhập email của bạn" 
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
                />
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-purple text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                >
                  Đăng ký ngay
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 lg:mb-0">
            <p className="text-gray-400 text-sm">© 2025 Antoree. Tất cả quyền được bảo lưu.</p>
            <div className="flex items-center space-x-2 text-gray-400">
              <HeartIcon className="w-4 h-4 text-red-500" />
              <span className="text-sm">Made with love in Vietnam</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-sm text-gray-400 hover:text-brand-light transition-colors duration-300">
              Điều khoản
            </Link>
            <Link to="/" className="text-sm text-gray-400 hover:text-brand-light transition-colors duration-300">
              Quyền riêng tư
            </Link>
            <Link to="/" className="text-sm text-gray-400 hover:text-brand-light transition-colors duration-300">
              Cookies
            </Link>
            <div className="flex items-center space-x-2 text-gray-400">
              <CubeTransparentIcon className="w-4 h-4" />
              <span className="text-sm">v2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;