export const fieldTypes = ["Sân 5", "Sân 7", "Sân 11"];
export const areas = ["Quận 1", "Quận 3", "Phú Nhuận", "Bình Thạnh", "Gò Vấp"];

export const fields = [
  {
    id: "f1",
    name: "Blue Arena Premium",
    area: "Quận 1",
    type: "Sân 7",
    price: 420000,
    rating: "4.8 / 5 từ 128 đánh giá",
    description: "Mặt cỏ mới, hệ thống đèn tốt, phòng thay đồ sạch sẽ.",
    images: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "f2",
    name: "Central Football Hub",
    area: "Quận 3",
    type: "Sân 5",
    price: 300000,
    rating: "4.6 / 5 từ 93 đánh giá",
    description: "Vị trí trung tâm, phù hợp nhóm bạn đá buổi tối.",
    images: [
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "f3",
    name: "Sunset Field Complex",
    area: "Bình Thạnh",
    type: "Sân 11",
    price: 780000,
    rating: "4.7 / 5 từ 74 đánh giá",
    description: "Không gian rộng, có bãi giữ xe và khu nước uống.",
    images: [
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "f4",
    name: "Peak Sport Stadium",
    area: "Phú Nhuận",
    type: "Sân 7",
    price: 450000,
    rating: "4.5 / 5 từ 56 đánh giá",
    description: "Sân thoáng, nhân viên hỗ trợ nhanh.",
    images: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1400&auto=format&fit=crop",
    ],
  },
];

export const hourlySlots = [
  { time: "06:00 - 07:30", priceRate: 0.8, booked: false },
  { time: "08:00 - 09:30", priceRate: 0.9, booked: false },
  { time: "17:30 - 19:00", priceRate: 1.3, booked: true },
  { time: "19:30 - 21:00", priceRate: 1.5, booked: false },
  { time: "21:30 - 23:00", priceRate: 1.1, booked: true },
];

export const ownerStats = [
  { title: "Sân đang hoạt động", value: "12" },
  { title: "Booking hôm nay", value: "37" },
  { title: "Doanh thu tháng", value: "248.000.000đ" },
];

export const adminStats = [
  { title: "Tổng User", value: "4.215" },
  { title: "Tổng Owner", value: "286" },
  { title: "Giao dịch hôm nay", value: "619" },
  { title: "Doanh thu hệ thống", value: "2.14 tỷ" },
];

export const topClubs = [
  { id: "c1", name: "Blue Arena District 1", address: "141 Nguyen Hue, Quan 1", area: "Quan 1" },
  { id: "c2", name: "Central Football Club", address: "340 Vo Van Tan, Quan 3", area: "Quan 3" },
  { id: "c3", name: "Sunset Sport Hub", address: "Brandstrasse 12, Binh Thanh", area: "Binh Thanh" },
];

export const userBenefits = [
  "Tim san trong quanh ban trong vai giay",
  "Dat lich va thanh toan an toan tren dien thoai",
  "Theo doi lich su tran dau va dat san",
  "Nhan thong bao lich dat va uu dai moi",
];

export const vouchers = [
  { code: "WELCOME10", discount: 10, expired: "2026-08-30" },
  { code: "NIGHT15", discount: 15, expired: "2026-09-15" },
];

export const bookingHistory = [
  { id: "b1", fieldName: "Blue Arena Premium", date: "2026-04-20", slot: "19:30 - 21:00", total: 630000, status: "COMPLETED" },
  { id: "b2", fieldName: "Central Football Hub", date: "2026-04-24", slot: "08:00 - 09:30", total: 270000, status: "UPCOMING" },
  { id: "b3", fieldName: "Peak Sport Stadium", date: "2026-04-10", slot: "21:30 - 23:00", total: 495000, status: "CANCELLED" },
];

export const userNotifications = [
  { id: "n1", content: "Ban co lich dat san toi nay luc 19:30.", isRead: false },
  { id: "n2", content: "Voucher WELCOME10 sap het han trong 5 ngay.", isRead: false },
  { id: "n3", content: "Yeu cau hoan tien ma #b3 da duoc tiep nhan.", isRead: true },
];
