import type { Product } from '../types';

// Các danh mục sản phẩm
export const categories = [
  'Tất cả',
  'Khóa học trẻ em',
  'Khóa học người lớn',
  'Luyện thi IELTS',
  'Luyện thi TOEIC',
  'Tiếng Anh giao tiếp',
  'Tiếng Anh doanh nghiệp',
  'Giáo trình - Sách',
  'Tài liệu học tập',
  'Giảng viên'
];

// Danh sách sản phẩm
export const products: Product[] = [
  {
    id: '1',
    name: 'Khóa học Tiếng Anh giao tiếp 1-1 với giáo viên bản xứ',
    price: 4500000,
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGlzaCUyMGNsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Học tiếng Anh 1-1 với giáo viên bản ngữ từ Mỹ, Anh, Canada',
    description: 'Khóa học tiếng Anh giao tiếp với giáo viên bản ngữ sẽ giúp bạn phát âm chuẩn và tự tin khi giao tiếp với người nước ngoài. Khóa học bao gồm 30 buổi học, mỗi buổi 50 phút, lịch học linh hoạt theo thời gian của bạn. Giáo viên đều có chứng chỉ TESOL/CELTA và nhiều năm kinh nghiệm giảng dạy.',
    category: 'Tiếng Anh giao tiếp',
    rating: 4.8,
    reviewCount: 245,
    isFavorite: false,
    instructor: 'John Smith'
  },
  {
    id: '2',
    name: 'Khóa học IELTS đảm bảo đầu ra 6.5+',
    price: 7990000,
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Luyện thi IELTS với lộ trình cá nhân hóa, cam kết đầu ra',
    description: 'Khóa học IELTS đảm bảo đầu ra 6.5+ với phương pháp giảng dạy độc quyền của Antoree. Chúng tôi phân tích điểm yếu của từng học viên và xây dựng lộ trình học tập phù hợp. Khóa học bao gồm 48 buổi học trực tiếp với giáo viên có chứng chỉ IELTS 8.0+ và kinh nghiệm luyện thi quốc tế. Cam kết hoàn tiền nếu không đạt mục tiêu đầu ra.',
    category: 'Luyện thi IELTS',
    rating: 4.9,
    reviewCount: 189,
    isFavorite: false,
    instructor: 'Sarah Johnson'
  },
  {
    id: '3',
    name: 'Khóa học Tiếng Anh cho trẻ em 5-8 tuổi',
    price: 3200000,
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGRyZW4lMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Phương pháp học tiếng Anh vui nhộn cho trẻ em thông qua trò chơi và hoạt động sáng tạo',
    description: 'Khóa học Tiếng Anh cho trẻ em 5-8 tuổi được thiết kế dựa trên phương pháp TPR (Total Physical Response) và CLIL (Content and Language Integrated Learning). Trẻ sẽ học tiếng Anh thông qua các hoạt động vui chơi, bài hát, trò chơi và dự án sáng tạo. Khóa học phát triển toàn diện 4 kỹ năng nghe, nói, đọc, viết với giáo trình Cambridge Kids. Mỗi lớp tối đa 6 học viên để đảm bảo chất lượng.',
    category: 'Khóa học trẻ em',
    rating: 4.9,
    reviewCount: 321,
    isFavorite: false,
    instructor: 'Emily Parker'
  },
  {
    id: '4',
    name: 'Khóa học TOEIC từ 0 đến 750+',
    price: 3500000,
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Chinh phục TOEIC từ con số 0 với phương pháp làm bài hiệu quả',
    description: 'Khóa học TOEIC từ 0 đến 750+ giúp bạn nắm vững cấu trúc bài thi, từ vựng và ngữ pháp trọng tâm, cùng chiến thuật làm bài hiệu quả. Khóa học bao gồm 36 buổi học, chia thành 3 giai đoạn: nền tảng, luyện đề và mô phỏng thi thật. Học viên được cung cấp tài liệu học tập độc quyền và có quyền truy cập vào ngân hàng đề thi online với hơn 50 bộ đề TOEIC cập nhật mới nhất.',
    category: 'Luyện thi TOEIC',
    rating: 4.7,
    reviewCount: 112,
    isFavorite: false,
    instructor: 'David Williams'
  },
  {
    id: '5',
    name: 'Khóa học Tiếng Anh thương mại cho doanh nghiệp',
    price: 8990000,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzJTIwbWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Nâng cao kỹ năng tiếng Anh chuyên ngành cho nhân viên doanh nghiệp',
    description: 'Khóa học Tiếng Anh thương mại được thiết kế riêng cho các doanh nghiệp muốn nâng cao năng lực tiếng Anh cho nhân viên. Chương trình bao gồm các module: Email business, Meeting & Presentation, Negotiation, Report Writing và Business Small Talk. Học viên sẽ được thực hành với tình huống thực tế từ môi trường doanh nghiệp. Khóa học có thể tùy chỉnh theo nhu cầu cụ thể của từng công ty và lĩnh vực.',
    category: 'Tiếng Anh doanh nghiệp',
    rating: 4.6,
    reviewCount: 78,
    isFavorite: false,
    instructor: 'Michael Brown'
  },
  {
    id: '6',
    name: 'Giáo trình Cambridge English Empower',
    price: 1500000,
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHklMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Bộ giáo trình tiếng Anh toàn diện từ Cambridge (A1-C1)',
    description: 'Bộ giáo trình Cambridge English Empower là tài liệu học tiếng Anh toàn diện phát triển bởi Đại học Cambridge. Bộ sách gồm 5 cấp độ từ A1 đến C1 theo khung tham chiếu châu Âu CEFR, giúp người học phát triển đồng đều 4 kỹ năng. Mỗi bộ bao gồm Student\'s Book, Workbook, Teacher\'s Book và quyền truy cập vào nền tảng học tập trực tuyến với các bài tập tương tác và đánh giá tiến độ tự động.',
    category: 'Giáo trình - Sách',
    rating: 4.7,
    reviewCount: 56,
    isFavorite: false,
    duration: '12 tháng'
  },
  {
    id: '7',
    name: 'Bộ tài liệu luyện thi IELTS 8.0+',
    price: 850000,
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHklMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Bộ tài liệu độc quyền từ các giảng viên IELTS 8.5+',
    description: 'Bộ tài liệu luyện thi IELTS 8.0+ là sản phẩm độc quyền được biên soạn bởi đội ngũ giảng viên có band điểm IELTS 8.5+ của Antoree. Bộ tài liệu bao gồm: Sổ tay từ vựng học thuật theo chủ đề, 150+ mẫu câu Writing Task 1 & 2 đạt 8.0+, 50 bài mẫu Speaking đạt điểm cao, chiến thuật làm bài Reading & Listening hiệu quả. Ngoài ra còn có các bộ đề mô phỏng và hướng dẫn chi tiết cách tự đánh giá và cải thiện bài làm.',
    category: 'Tài liệu học tập',
    rating: 4.8,
    reviewCount: 210,
    isFavorite: false,
    duration: '6 tháng'
  },
  {
    id: '8',
    name: 'Khóa học Tiếng Anh cho trẻ em 9-12 tuổi',
    price: 3990000,
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGRyZW4lMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Phát triển tiếng Anh học thuật và giao tiếp cho trẻ 9-12 tuổi',
    description: 'Khóa học Tiếng Anh cho trẻ 9-12 tuổi tập trung vào phát triển khả năng sử dụng tiếng Anh học thuật và giao tiếp. Trẻ sẽ được học với giáo trình chuẩn quốc tế, kết hợp với các dự án STEM bằng tiếng Anh để phát triển tư duy phản biện và kỹ năng thế kỷ 21. Khóa học bao gồm 48 buổi học, mỗi buổi 75 phút với các hoạt động đa dạng: thuyết trình, tranh luận, viết sáng tạo và nghiên cứu nhóm.',
    category: 'Khóa học trẻ em',
    rating: 4.9,
    reviewCount: 87,
    isFavorite: false,
    instructor: 'Jennifer Wilson'
  },
  {
    id: '9',
    name: 'Giảng viên Jessica Thompson - Chuyên gia IELTS',
    price: 850000,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhY2hlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Giảng viên IELTS với hơn 10 năm kinh nghiệm, chuyên Writing & Speaking',
    description: 'Jessica Thompson là giảng viên IELTS hàng đầu với hơn 10 năm kinh nghiệm giảng dạy. Cô có bằng Thạc sĩ TESOL từ Đại học Melbourne và chứng chỉ IELTS 8.5 Overall (Writing 9.0, Speaking 8.5). Jessica đã giúp hơn 1000 học viên đạt điểm IELTS mục tiêu, với phương pháp giảng dạy độc đáo tập trung vào việc phát triển tư duy ngôn ngữ và chiến lược làm bài hiệu quả. Đặc biệt, cô có thế mạnh trong việc cải thiện điểm số Writing và Speaking cho học viên.',
    category: 'Giảng viên',
    rating: 4.9,
    reviewCount: 142,
    isFavorite: false,
    duration: '1 buổi/90 phút'
  },
  {
    id: '10',
    name: 'Giảng viên Robert Chen - Chuyên gia Tiếng Anh doanh nghiệp',
    price: 1200000,
    imageUrl: 'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXNpYW4lMjB0ZWFjaGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Chuyên gia Tiếng Anh thương mại với kinh nghiệm làm việc tại các tập đoàn đa quốc gia',
    description: 'Robert Chen là chuyên gia đào tạo Tiếng Anh thương mại với hơn 15 năm kinh nghiệm làm việc tại các tập đoàn đa quốc gia như Google, Microsoft và HSBC. Ông có bằng MBA từ Harvard Business School và chứng chỉ đào tạo doanh nghiệp từ Cambridge. Robert chuyên đào tạo các kỹ năng tiếng Anh thương mại như đàm phán, thuyết trình, quản lý cuộc họp và giao tiếp liên văn hóa. Phương pháp giảng dạy của ông kết hợp lý thuyết với các tình huống thực tế từ kinh nghiệm doanh nghiệp thực chiến.',
    category: 'Giảng viên',
    rating: 4.8,
    reviewCount: 89,
    isFavorite: false,
    duration: '1 buổi/90 phút'
  },
  {
    id: '11',
    name: 'Khóa học Tiếng Anh Academic cho học sinh THPT',
    price: 5500000,
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Phát triển kỹ năng tiếng Anh học thuật cho học sinh chuẩn bị vào đại học',
    description: 'Khóa học Tiếng Anh Academic cho học sinh THPT tập trung vào phát triển kỹ năng tiếng Anh học thuật cần thiết cho việc học đại học và thi cử. Chương trình bao gồm các module: Academic Writing, Critical Reading, Presentation Skills và Research Methods. Học viên sẽ được rèn luyện cách viết essay, đọc hiểu và phân tích văn bản học thuật, thuyết trình chuyên nghiệp và phương pháp nghiên cứu bằng tiếng Anh. Đặc biệt phù hợp cho học sinh dự định du học hoặc theo học các chương trình quốc tế.',
    category: 'Khóa học người lớn',
    rating: 4.7,
    reviewCount: 76,
    isFavorite: false,
    instructor: 'Andrew Wilson'
  },
  {
    id: '12',
    name: 'Bộ tài liệu Tiếng Anh giao tiếp theo tình huống',
    price: 650000,
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHklMjBib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    shortDescription: 'Tài liệu phát triển kỹ năng giao tiếp theo 50+ tình huống thực tế',
    description: 'Bộ tài liệu Tiếng Anh giao tiếp theo tình huống bao gồm 50+ tình huống giao tiếp thực tế như: đi du lịch, phỏng vấn xin việc, hội họp, mua sắm, đi nhà hàng, đàm phán kinh doanh... Mỗi tình huống cung cấp từ vựng chuyên biệt, mẫu câu hữu ích, và các bài tập thực hành. Đi kèm là ứng dụng mobile với file âm thanh do người bản xứ thu âm, giúp người học luyện phát âm và ngữ điệu chuẩn. Tài liệu phù hợp cho người học muốn nâng cao kỹ năng giao tiếp thực tế.',
    category: 'Tài liệu học tập',
    rating: 4.6,
    reviewCount: 98,
    isFavorite: false,
    duration: '3 tháng'
  }
];

export const user: { id: string; name: string; favorites: string[]; viewHistory: string[] } = {
  id: '1',
  name: 'Người dùng',
  favorites: [],
  viewHistory: []
}; 