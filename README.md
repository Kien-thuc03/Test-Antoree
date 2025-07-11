# EduTech Hub - Sàn Giáo Dục Thương Mại Điện Tử tích hợp AI

EduTech Hub là một giao diện Front-end cho sàn giáo dục thương mại điện tử tích hợp AI, nơi người dùng có thể tìm kiếm, khám phá và yêu thích các khoá học hoặc sản phẩm giáo dục.

![EduTech Hub Preview](./preview.png)

## Tính năng

### Hiển thị danh sách sản phẩm
- Hiển thị danh sách khóa học với thông tin: tên, giá, ảnh, mô tả ngắn
- Hiển thị chi tiết khóa học khi người dùng click "Xem chi tiết"

### Tìm kiếm và lọc
- Tìm kiếm theo tên khóa học
- Lọc theo khoảng giá (dưới 500k, 500k-1 triệu, trên 1 triệu)
- Lọc theo danh mục khóa học

### Gợi ý thông minh (AI)
- Chức năng gợi ý sản phẩm phù hợp dựa trên hành vi người dùng
- Gợi ý dựa trên khóa học đã xem và yêu thích

### Yêu thích
- Đánh dấu sản phẩm yêu thích
- Trang riêng hiển thị danh sách sản phẩm đã yêu thích

### Lịch sử xem
- Hiển thị các khóa học người dùng đã xem gần đây

## Công nghệ sử dụng

- React 19
- TypeScript
- Tailwind CSS
- React Router v6
- HeadlessUI
- Axios (giả lập API)

## Cài đặt và chạy

1. Clone repository:
```
git clone https://github.com/yourusername/edutech-hub.git
cd edutech-hub
```

2. Cài đặt dependencies:
```
npm install
```

3. Chạy ứng dụng ở chế độ development:
```
npm run dev
```

4. Build ứng dụng cho production:
```
npm run build
```

5. Xem ứng dụng đã được build:
```
npm run preview
```

## Cấu trúc dự án

```
src/
├── assets/        # Hình ảnh và tài nguyên khác
├── components/    # Các thành phần UI tái sử dụng
├── context/       # Context API cho quản lý state
├── hooks/         # Custom hooks
├── mocks/         # Dữ liệu giả lập
├── pages/         # Các trang chính
├── services/      # API services
├── types/         # TypeScript interfaces
├── utils/         # Các hàm tiện ích
├── App.tsx        # Component chính
└── main.tsx       # Entry point
```

## Tính năng nâng cao

- **Skeleton loading**: Hiển thị loading skeleton khi đang tải dữ liệu
- **Responsive design**: Tương thích với desktop, tablet và mobile
- **Error handling**: Xử lý lỗi khi API fails
- **Performance optimization**: Tối ưu hiệu năng với React hooks
