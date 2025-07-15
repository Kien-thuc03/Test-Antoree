import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, UserIcon } from '@heroicons/react/24/outline';
import logo from '../assets/images/logo_withtagline.svg';
const Header: React.FC = () => {

  return (
    <header className="bg-[#06261D] text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center my-6 md:my-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="w-40 h-14" />
            </Link>
          </div>
          <div className="flex items-center space-x-4 pl-10">
            <Link to="/" className="flex items-center hover:text-[#009933] transition-colors">
              <span className="hidden sm:inline">Trang chủ</span>
            </Link>
            <Link to="/" className="flex items-center hover:text-[#009933] transition-colors">
              <span className="hidden sm:inline">Giáo viên</span>
            </Link>
            <Link to="/" className="flex items-center hover:text-[#009933] transition-colors">
              <span className="hidden sm:inline">Cộng đồng</span>
            </Link>
            <Link to="/" className="flex items-center hover:text-[#009933] transition-colors">
              <span className="hidden sm:inline">Đánh giá</span>
            </Link>
            <Link to="/favorites" className="flex items-center hover:text-[#009933] transition-colors">
              <HeartIcon className="w-6 h-6 mr-1" />
            </Link>
            <Link to="/profile" className="flex items-center hover:text-[#009933] transition-colors">
              <UserIcon className="w-6 h-6 mr-1" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 