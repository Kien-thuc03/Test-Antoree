import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import type { Product } from '../types';
import { formatCurrency } from '../utils/formatters';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleFavorite: (productId: string) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onToggleFavorite
}) => {
  const [activeTab, setActiveTab] = useState('description');
  
  if (!product) return null;

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="flex min-h-screen items-center justify-center px-4 py-6 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 transition-opacity cursor-pointer" onClick={onClose} />
          </Transition.Child>

          {/* Trick để căn giữa modal */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl z-50 relative">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={onClose}
                  aria-label="Đóng"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() => onToggleFavorite(product.id)}
                        className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-opacity-100 transition-colors"
                        aria-label={product.isFavorite ? "Bỏ yêu thích" : "Yêu thích"}
                      >
                        {product.isFavorite ? (
                          <HeartIconSolid className="w-6 h-6 text-antoree-purple" />
                        ) : (
                          <HeartIcon className="w-6 h-6 text-gray-600" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <Dialog.Title as="h3" className="text-2xl font-bold text-antoree-green">
                    {product.name}
                  </Dialog.Title>
                  
                  <div className="mt-2">
                    <span className="inline-block bg-antoree-blue/10 text-antoree-blue text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        {product.rating} ({product.reviewCount} đánh giá)
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-3xl font-bold text-antoree-blue">
                    {formatCurrency(product.price)}
                  </div>
                  
                  {/* Thông tin chi tiết khóa học */}
                  <div className="mt-4 space-y-3">
                    {product.instructor && (
                      <div className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-antoree-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Giảng viên: <span className="font-medium">{product.instructor}</span></span>
                      </div>
                    )}
                    
                    {product.duration && (
                      <div className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-antoree-purple mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Thời lượng: <span className="font-medium">{product.duration}</span></span>
                      </div>
                    )}
                  </div>
                  
                  {/* Tabs */}
                  <div className="mt-6 border-b border-gray-200">
                    <div className="flex space-x-4">
                      <button
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === 'description'
                            ? 'border-antoree-blue text-antoree-blue'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('description')}
                      >
                        Mô tả
                      </button>
                      <button
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          activeTab === 'reviews'
                            ? 'border-antoree-blue text-antoree-blue'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab('reviews')}
                      >
                        Đánh giá ({product.reviewCount})
                      </button>
                    </div>
                  </div>
                  
                  {/* Tab Content */}
                  <div className="mt-4">
                    {activeTab === 'description' ? (
                      <div className="prose max-w-none text-gray-600">
                        <p>{product.description || product.shortDescription}</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-antoree-blue/20 flex items-center justify-center text-antoree-blue font-medium">
                              HN
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Học viên Nguyễn</p>
                            <div className="flex items-center mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className={`w-4 h-4 ${i < 5 ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-xs text-gray-500 ml-2">2 tháng trước</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">Khóa học rất hay và bổ ích. Giảng viên nhiệt tình, tài liệu đầy đủ. Tôi đã cải thiện được nhiều kỹ năng sau khi hoàn thành khóa học này.</p>
                        
                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-antoree-purple/20 flex items-center justify-center text-antoree-purple font-medium">
                                TL
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">Trần Lan</p>
                              <div className="flex items-center mt-1">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500 ml-2">1 tháng trước</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">Nội dung khóa học rất phù hợp với nhu cầu của tôi. Tuy nhiên, tôi nghĩ có thể bổ sung thêm một số bài tập thực hành để học viên có thể áp dụng kiến thức tốt hơn.</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <button className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gradient-to-r from-antoree-blue to-antoree-purple hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-antoree-blue">
                      Đăng ký học ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductDetailModal; 