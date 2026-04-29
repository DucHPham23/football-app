# ⚽ HỆ THỐNG WEBSITE QUẢN LÝ & ĐẶT SÂN BÓNG ĐÁ

## 🚀 1. Tổng Quan Hệ Thống

Hệ thống là website đặt sân bóng đá trực tuyến, cho phép người dùng tìm kiếm, xem lịch và đặt sân nhanh chóng.

Chức năng chính:

- Tìm kiếm sân theo nhiều tiêu chí
- Xem lịch trống dạng calendar
- Đặt sân theo khung giờ
- Thanh toán online (PayPal, VietQR)
- Blog chia sẻ nội dung bóng đá
- Hệ thống mã giảm giá và gói combo cho chủ sân

## 🎯 2. Mục Tiêu Hệ Thống

- Tối ưu trải nghiệm đặt sân online
- Hỗ trợ chủ sân quản lý hiệu quả
- Xây dựng hệ thống thanh toán trung gian minh bạch
- Tích hợp khuyến mãi và nội dung marketing (blog)

## 🧠 3. Logic Cốt Lõi (Quan Trọng Nhất)

### 🔥 Hệ Thống Thanh Toán Trung Gian

Hệ thống hoạt động theo mô hình marketplace:

1. Người dùng thanh toán.
2. Hệ thống (Admin) giữ tiền (`HOLDING`).
3. Sau khi trận đấu hoàn tất:
   - Chuyển tiền cho Owner (`RELEASED`).
   - Trừ phí hoa hồng (3-5%).
4. Nếu hủy:
   - Admin xử lý hoàn tiền (`REFUNDED`).

## 👥 4. Các Vai Trò

### 👤 User (Người Dùng)

Không cần đăng nhập:

- Tìm kiếm sân theo khu vực, giá, loại sân (5/7/11)
- Xem thông tin sân
- Xem lịch trống

Cần đăng nhập:

- Đặt sân
- Thanh toán
- Xem chi tiết blog

Chức năng:

- Đặt sân theo khung giờ
- Thanh toán online (PayPal, VietQR)
- Thanh toán đặt cọc / toàn bộ
- Áp dụng mã giảm giá
- Xem lịch sử đặt sân
- Hủy đặt sân
- Yêu cầu hoàn tiền
- Đánh giá sân
- Nhận thông báo

### 👑 Owner (Chủ Sân)

Bắt buộc:

- Đăng ký / đăng nhập

Chức năng:

- Quản lý sân (thêm / sửa / xóa)
- Thiết lập lịch trống
- Thiết lập giá theo khung giờ
- Tải lên hình ảnh sân
- Quản lý booking (xem, xác nhận, từ chối, hủy)
- Xem báo cáo doanh thu
- Xem lịch sử giao dịch
- Viết bài blog
- Tạo gói combo sân
- Mua mã giảm giá từ Admin
- Tạo voucher riêng

### 🛠️ Admin (Quản Trị Viên)

Chức năng:

- Quản lý toàn bộ hệ thống
- Quản lý user / owner
- Duyệt chủ sân
- Quản lý sân (duyệt, từ chối, xóa)
- Quản lý blog (duyệt, sửa, xóa)
- Tạo và bán mã giảm giá cho Owner
- Xem báo cáo tổng doanh thu hệ thống
- Quản lý thanh toán cốt lõi: giữ tiền, chuyển tiền, trừ hoa hồng, hoàn tiền

## 🔐 5. Xác Thực

- Đăng ký (include nhập + xác thực thông tin)
- Đăng nhập (include nhập + xác thực)
- OTP (extend)
- Quên mật khẩu (extend)

## 📅 6. Luồng Nghiệp Vụ

### 🔹 Luồng Đặt Sân

1. Tìm kiếm sân
2. Xem chi tiết
3. Xem lịch trống (calendar)
4. Chọn khung giờ
5. Tạo booking
6. Thanh toán

### 🔹 Luồng Thanh Toán

1. Chọn phương thức (PayPal / VietQR)
2. Thanh toán
3. Hệ thống tạo:
   - `Payment`
   - `Transaction` (`HOLDING`)

### 🔹 Luồng Hoàn Tiền

1. User hủy sân
2. Gửi yêu cầu hoàn tiền
3. Admin xử lý
4. `Transaction` chuyển trạng thái `REFUNDED`

### 🔹 Luồng Duyệt

- Owner gửi sân -> Admin duyệt
- Owner viết blog -> Admin duyệt

## 🏗️ 7. Công Nghệ Sử Dụng

Frontend:

- React + Vite + HTML5 + CSS
- TailwindCSS v4

Backend:

- NodeJS (Express)

Database:

- MySQL / SQL Server

Authentication:

- JWT

Payment:

- PayPal API
- VietQR (mock)

## 🗄️ 8. Database Schema

### USERS

- id, name, email, phone, password
- role (`USER` | `OWNER` | `ADMIN`)
- status

### FIELDS

- id, owner_id, name, address, type
- description, status

### FIELD_PRICING

- field_id, start_time, end_time, price

### BOOKINGS

- user_id, field_id, date, time
- total_price, status

### PAYMENTS

- booking_id, amount, method, type, status

### TRANSACTIONS (🔥 QUAN TRỌNG)

- booking_id
- total_amount
- commission
- owner_receive
- status (`HOLDING` | `RELEASED` | `REFUNDED`)

### VOUCHERS

- code, discount, quantity, expired

### BLOGS

- owner_id, title, content, status

### REVIEWS

- user_id, field_id, rating, comment

### NOTIFICATIONS

- user_id, content, is_read

## 🔌 9. API Backend

- Auth API
- Field API
- Booking API
- Payment API
- Transaction API
- Voucher API
- Blog API
- Admin API

## 🎨 10. Giao Diện

User:

- Trang chủ (list sân)
- Trang chi tiết sân
- Trang booking
- Trang thanh toán
- Trang blog

Owner Dashboard:

- Quản lý sân
- Quản lý booking
- Doanh thu
- Blog
- Voucher

Admin Dashboard:

- Quản lý user
- Quản lý sân
- Quản lý giao dịch
- Thống kê hệ thống

## 📱 11. Responsive

- Hỗ trợ mobile
- Hỗ trợ desktop
- UI/UX thân thiện

## 🚀 12. Triển Khai

Local:

```bash
npm install
npm run dev
```

Deploy:

- Frontend: Vercel
- Backend: Render / VPS
- Database: MySQL Server

## 🧠 13. Quy Tắc Hệ Thống

- User phải đăng nhập mới đặt sân
- Booking phải thanh toán
- Admin kiểm soát toàn bộ tiền
- Blog phải duyệt mới hiển thị
- Sân phải duyệt mới hiển thị

## 🎯 14. Mục Tiêu Hoàn Thành

- Hệ thống booking hoàn chỉnh
- Thanh toán trung gian hoạt động
- Dashboard đầy đủ cho Owner và Admin
- UI/UX hoàn chỉnh

## 🔥 15. Thứ Tự Phát Triển

1. Authentication (JWT)
2. Field API
3. Booking API
4. Payment + Transaction
5. Frontend UI
6. Dashboard

## 🤖 16. Hướng Dẫn Cho AI Code

AI phải:

- Tuân theo database schema
- Tuân theo luồng booking + payment
- Implement transaction (`HOLDING -> RELEASED -> REFUNDED`)

KHÔNG được:

- Bỏ qua transaction
- Bỏ qua phân quyền
- Bỏ qua validate logic
