import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/images/logo_withtagline.svg';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Trang chủ', href: '/', icon: null },
    { name: 'Giáo viên', href: '/teachers', icon: null },
    { name: 'Cộng đồng', href: '/community', icon: null },
    { name: 'Đánh giá', href: '/reviews', icon: null },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-antoree-green-light opacity-95 backdrop-blur-sm shadow-lg' 
        : 'bg-antoree-green'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Antoree Logo" 
                className="w-40 h-14 transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  isActivePath(item.href)
                    ?  isScrolled ? 'text-antoree-green' : 'text-antoree-green-light'
                    : isScrolled
                      ? 'text-antoree-green'
                      : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${isScrolled ? 'bg-antoree-green' : 'bg-antoree-green-light'} transform origin-left transition-transform duration-300 ${
                  isActivePath(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Favorites */}
            <Link
              to="/favorites"
              className={`relative p-2 transition-colors duration-300 group ${
                isScrolled ? 'text-antoree-green hover:text-[#57F27E]' : 'text-white hover:text-antoree-green'
              }`}
              title="Yêu thích"
            >
              <HeartIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#06261D] text-[#57F27E] text-xs rounded-full flex items-center justify-center animate-pulse">
                3
              </span>
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className={`p-2 transition-colors duration-300 group ${
                isScrolled ? 'text-antoree-green hover:text-[#57F27E]' : 'text-white hover:text-antoree-green'
              }`}
              title="Hồ sơ"
            >
              <UserIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </Link>

            {/* CTA Button */}
            <button className={"*:hidden md:block bg-gradient-to-r from-[#06261D] to-[#57F27E] text-white font-medium px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"}>
              Đăng nhập
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-antoree-green hover:text-[#57F27E]' : 'text-white hover:text-antoree-green'
              }`}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActivePath(item.href)
                    ? 'text-antoree-green bg-white/10'
                    : isScrolled
                      ? 'text-antoree-green hover:text-[#57F27E] hover:bg-white/5'
                      : 'text-white hover:text-antoree-green hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button className={`w-full bg-gradient-to-r from-[#06261D] to-[#57F27E] ${
                isScrolled ? 'text-antoree-green' : 'text-white'
              } font-medium py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                Đăng nhập
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 