import { useMemo, useState } from "react";
import Button from "../../components/common/Button";
import EmptyState from "../../components/common/EmptyState";
import Input from "../../components/common/Input";
import Toast from "../../components/common/Toast";
import { bookingHistory, userNotifications, vouchers } from "../../data";

export default function UserCenter() {
  const [bookings, setBookings] = useState(bookingHistory);
  const [notifications, setNotifications] = useState(userNotifications);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState("5");
  const [refundBookingId, setRefundBookingId] = useState("");
  const [toast, setToast] = useState("");

  const unreadCount = useMemo(() => notifications.filter((item) => !item.isRead).length, [notifications]);

  const cancelBooking = (id) => {
    setBookings((prev) => prev.map((item) => (item.id === id ? { ...item, status: "CANCELLED" } : item)));
    setToast("Da huy lich dat san.");
  };

  const requestRefund = () => {
    if (!refundBookingId) {
      setToast("Vui long nhap ma booking de yeu cau hoan tien.");
      return;
    }
    setToast(`Da gui yeu cau hoan tien cho booking ${refundBookingId}.`);
    setRefundBookingId("");
  };

  const submitReview = () => {
    if (!reviewText) {
      setToast("Vui long nhap noi dung danh gia.");
      return;
    }
    setToast(`Da gui danh gia ${reviewRating}/5 thanh cong.`);
    setReviewText("");
    setReviewRating("5");
  };

  const markNotificationsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, isRead: true })));
    setToast("Da danh dau tat ca thong bao la da doc.");
  };

  return (
    <main className="container page">
      <section className="panel user-center-header">
        <h1>Trung tam nguoi dung</h1>
        <p>Quan ly lich su dat san, voucher, hoan tien, danh gia va thong bao.</p>
      </section>

      <section className="user-center-grid">
        <article className="panel">
          <h3>Voucher cua ban</h3>
          <div className="simple-list">
            {vouchers.map((voucher) => (
              <div key={voucher.code} className="line-item">
                <strong>{voucher.code}</strong>
                <span>Giam {voucher.discount}% - Het han {voucher.expired}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <h3>Thong bao ({unreadCount} chua doc)</h3>
          <div className="simple-list">
            {notifications.map((item) => (
              <div key={item.id} className="line-item">
                <strong>{item.isRead ? "Da doc" : "Moi"}</strong>
                <span>{item.content}</span>
              </div>
            ))}
          </div>
          <Button variant="secondary" onClick={markNotificationsRead}>
            Danh dau da doc
          </Button>
        </article>
      </section>

      <section className="panel">
        <h3>Lich su dat san</h3>
        {bookings.length ? (
          <div className="simple-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="line-item line-item-action">
                <div>
                  <strong>
                    {booking.fieldName} - {booking.id}
                  </strong>
                  <span>
                    {booking.date} | {booking.slot} | {booking.total.toLocaleString("vi-VN")}d | {booking.status}
                  </span>
                </div>
                {booking.status === "UPCOMING" && <Button onClick={() => cancelBooking(booking.id)}>Huy dat san</Button>}
              </div>
            ))}
          </div>
        ) : (
          <EmptyState title="Chua co lich su dat san" desc="Sau khi dat san, thong tin se hien thi tai day." />
        )}
      </section>

      <section className="user-center-grid">
        <article className="panel">
          <h3>Yeu cau hoan tien</h3>
          <Input label="Ma booking" placeholder="Vi du: b3" value={refundBookingId} onChange={(e) => setRefundBookingId(e.target.value)} />
          <Button variant="secondary" onClick={requestRefund}>
            Gui yeu cau hoan tien
          </Button>
        </article>

        <article className="panel">
          <h3>Danh gia san</h3>
          <label className="input-wrap">
            <span>Diem danh gia</span>
            <select value={reviewRating} onChange={(e) => setReviewRating(e.target.value)}>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </label>
          <label className="input-wrap">
            <span>Noi dung</span>
            <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Nhap danh gia cua ban..." />
          </label>
          <Button onClick={submitReview}>Gui danh gia</Button>
        </article>
      </section>
      <Toast message={toast} onClose={() => setToast("")} />
    </main>
  );
}
