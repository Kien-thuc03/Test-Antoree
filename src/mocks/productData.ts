import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Khóa học tiếng Anh giao tiếp với người bản xứ',
    price: 450000,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGlzaCUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học tiếng Anh 1-1 với giáo viên bản ngữ từ Mỹ, Anh, Canada',
    description: 'Khóa học tiếng Anh giao tiếp với giáo viên bản ngữ sẽ giúp bạn phát âm chuẩn và tự tin khi giao tiếp với người nước ngoài. Khóa học bao gồm 30 buổi học, mỗi buổi 50 phút, lịch học linh hoạt theo thời gian của bạn. Giáo viên đều có chứng chỉ TESOL/CELTA và nhiều năm kinh nghiệm giảng dạy.',
    category: 'Ngoại ngữ',
    rating: 4.8,
    reviewCount: 245,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Khóa học Python cho người mới bắt đầu',
    price: 799000,
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học lập trình Python từ cơ bản đến nâng cao với dự án thực tế',
    description: 'Khóa học Python cho người mới bắt đầu sẽ giúp bạn nắm vững ngôn ngữ lập trình phổ biến nhất hiện nay. Bạn sẽ học từ cú pháp cơ bản đến các khái niệm nâng cao như OOP, làm việc với database, và xây dựng ứng dụng web với Django. Khóa học bao gồm 50 video bài giảng, 100+ bài tập thực hành và 5 dự án thực tế để áp dụng kiến thức.',
    category: 'Công nghệ',
    rating: 4.7,
    reviewCount: 189,
    isFavorite: false
  },
  {
    id: 3,
    name: 'Khóa học Marketing Online tổng quát',
    price: 1200000,
    imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học cách xây dựng chiến lược marketing online hiệu quả',
    description: 'Khóa học Marketing Online tổng quát cung cấp kiến thức từ cơ bản đến chuyên sâu về các kênh marketing online như Google Ads, Facebook Ads, SEO, Content Marketing, Email Marketing. Bạn sẽ được học cách xây dựng chiến lược marketing toàn diện, phân tích dữ liệu và tối ưu hóa chiến dịch. Giảng viên là chuyên gia marketing với hơn 10 năm kinh nghiệm trong ngành.',
    category: 'Marketing',
    rating: 4.9,
    reviewCount: 321,
    isFavorite: false
  },
  {
    id: 4,
    name: 'Khóa học Piano cơ bản',
    price: 350000,
    imageUrl: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGlhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học đàn piano từ cơ bản với phương pháp hiện đại',
    description: 'Khóa học Piano cơ bản dành cho người mới bắt đầu, không cần kiến thức âm nhạc trước đó. Bạn sẽ học cách đọc nốt nhạc, kỹ thuật đánh đàn cơ bản và thực hành với các bài hát đơn giản. Khóa học bao gồm 24 bài học, mỗi bài 30 phút, có video hướng dẫn chi tiết và tài liệu đi kèm.',
    category: 'Âm nhạc',
    rating: 4.5,
    reviewCount: 112,
    isFavorite: false
  },
  {
    id: 5,
    name: 'Khóa học Thiết kế đồ họa với Adobe',
    price: 899000,
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học thiết kế với bộ công cụ Adobe (Photoshop, Illustrator, InDesign)',
    description: 'Khóa học Thiết kế đồ họa với Adobe giúp bạn thành thạo 3 phần mềm thiết kế quan trọng nhất: Photoshop, Illustrator và InDesign. Bạn sẽ học cách chỉnh sửa hình ảnh, thiết kế logo, banner, poster và các ấn phẩm quảng cáo chuyên nghiệp. Khóa học bao gồm 60 video bài giảng, file thiết kế mẫu và các dự án thực hành.',
    category: 'Thiết kế',
    rating: 4.6,
    reviewCount: 178,
    isFavorite: false
  },
  {
    id: 6,
    name: 'Khóa học Kế toán thực hành',
    price: 1500000,
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWNjb3VudGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học kế toán thực tế từ A-Z với chuyên gia hàng đầu',
    description: 'Khóa học Kế toán thực hành cung cấp kiến thức và kỹ năng kế toán toàn diện, từ hạch toán cơ bản đến lập báo cáo tài chính, quyết toán thuế. Bạn sẽ được thực hành trên phần mềm kế toán thực tế và xử lý các tình huống kế toán phát sinh trong doanh nghiệp. Giảng viên là kế toán trưởng với hơn 15 năm kinh nghiệm tại các công ty lớn.',
    category: 'Kinh doanh',
    rating: 4.7,
    reviewCount: 156,
    isFavorite: false
  },
  {
    id: 7,
    name: 'Khóa học Tiếng Nhật N5-N4',
    price: 650000,
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW5lc2UlMjBsYW5ndWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học tiếng Nhật từ con số 0 đến trình độ N4',
    description: 'Khóa học Tiếng Nhật N5-N4 giúp bạn nắm vững ngữ pháp, từ vựng và kỹ năng giao tiếp cơ bản bằng tiếng Nhật. Khóa học bao gồm 48 bài học, covering hiragana, katakana, kanji cơ bản, và các mẫu câu giao tiếp thông dụng. Sau khóa học, bạn có thể tham gia kỳ thi JLPT N4 với sự tự tin.',
    category: 'Ngoại ngữ',
    rating: 4.8,
    reviewCount: 210,
    isFavorite: false
  },
  {
    id: 8,
    name: 'Khóa học Yoga cho người mới bắt đầu',
    price: 399000,
    imageUrl: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học yoga tại nhà với hướng dẫn chi tiết, phù hợp cho người mới',
    description: 'Khóa học Yoga cho người mới bắt đầu cung cấp các bài tập an toàn, hiệu quả cho người chưa có kinh nghiệm tập yoga. Bạn sẽ học các tư thế cơ bản, kỹ thuật thở đúng và cách kết hợp chuyển động với hơi thở. Khóa học bao gồm 30 video bài tập, từ 15-45 phút mỗi bài, phù hợp với nhiều mức độ thể lực khác nhau.',
    category: 'Sức khỏe',
    rating: 4.9,
    reviewCount: 287,
    isFavorite: false
  },
  {
    id: 9,
    name: 'Khóa học Làm bánh Pháp',
    price: 850000,
    imageUrl: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwcGFzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học làm bánh Pháp với đầu bếp có kinh nghiệm quốc tế',
    description: 'Khóa học Làm bánh Pháp dạy bạn cách làm các loại bánh nổi tiếng của Pháp như macaron, croissant, eclair, tart và các loại bánh ngọt khác. Bạn sẽ học các kỹ thuật làm bánh chuyên nghiệp, cách trang trí bánh và những bí quyết của đầu bếp. Khóa học bao gồm 20 video hướng dẫn chi tiết, công thức và tips để thành công ngay từ lần đầu tiên.',
    category: 'Ẩm thực',
    rating: 4.7,
    reviewCount: 142,
    isFavorite: false
  },
  {
    id: 10,
    name: 'Khóa học Đầu tư chứng khoán cho người mới',
    price: 1200000,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học cách đầu tư chứng khoán an toàn và hiệu quả',
    description: 'Khóa học Đầu tư chứng khoán cho người mới cung cấp kiến thức nền tảng về thị trường chứng khoán, cách đọc báo cáo tài chính, phân tích cơ bản và kỹ thuật. Bạn sẽ học cách xây dựng danh mục đầu tư, quản lý rủi ro và các chiến lược đầu tư phù hợp với mục tiêu tài chính cá nhân. Giảng viên là chuyên gia với hơn 12 năm kinh nghiệm đầu tư trên thị trường chứng khoán Việt Nam.',
    category: 'Tài chính',
    rating: 4.6,
    reviewCount: 189,
    isFavorite: false
  }
];

export const user: { id: number; name: string; favorites: number[]; viewHistory: number[] } = {
  id: 1,
  name: 'Người dùng',
  favorites: [],
  viewHistory: []
};

export const categories = [
  'Tất cả',
  'Ngoại ngữ',
  'Công nghệ',
  'Marketing',
  'Âm nhạc',
  'Thiết kế',
  'Kinh doanh',
  'Sức khỏe',
  'Ẩm thực',
  'Tài chính'
]; 