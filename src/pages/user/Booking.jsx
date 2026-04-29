import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Toast from "../../components/common/Toast";
import SlotPicker from "../../components/user/SlotPicker";
import { fields } from "../../data";

export default function Booking() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const [paymentType, setPaymentType] = useState("DEPOSIT");
  const [voucherCode, setVoucherCode] = useState("");
  const [toast, setToast] = useState("");
  const field = fields.find((item) => item.id === id) || fields[0];

  const totalPrice = selectedSlot ? selectedSlot.slotPrice : 0;
  const discountPercent = voucherCode.trim().toUpperCase() === "WELCOME10" ? 10 : 0;
  const discountedTotal = totalPrice - (totalPrice * discountPercent) / 100;
  const payableNow = paymentType === "DEPOSIT" ? Math.round(discountedTotal * 0.3) : discountedTotal;

  const confirmBooking = () => {
    if (!selectedDate || !selectedSlot) {
      setToast("Vui long chon ngay va khung gio truoc khi xac nhan.");
      return;
    }
    setToast(`Dat san thanh cong. Thanh toan ${payableNow.toLocaleString("vi-VN")}d qua ${paymentMethod}.`);
  };

  return (
    <main className="container page">
      <section className="panel booking-layout">
        <div>
          <h1>Trang dat san</h1>
          <p>San: {field.name}</p>
          <Input label="Chon ngay" type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} />
          <SlotPicker basePrice={field.price} selected={selectedSlot} onSelect={setSelectedSlot} />
        </div>
        <aside className="panel summary">
          <h3>Thong tin da chon</h3>
          <p>Ngay: {selectedDate || "Chua chon"}</p>
          <p>Gio: {selectedSlot?.time || "Chua chon"}</p>
          <p>Gia goc: {totalPrice.toLocaleString("vi-VN")}d</p>
          <Input label="Voucher" placeholder="Nhap ma giam gia (WELCOME10)" value={voucherCode} onChange={(event) => setVoucherCode(event.target.value)} />
          <label className="input-wrap">
            <span>Phuong thuc thanh toan</span>
            <select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}>
              <option value="PayPal">PayPal</option>
              <option value="VietQR">VietQR</option>
            </select>
          </label>
          <label className="input-wrap">
            <span>Hinh thuc thanh toan</span>
            <select value={paymentType} onChange={(event) => setPaymentType(event.target.value)}>
              <option value="DEPOSIT">Dat coc 30%</option>
              <option value="FULL">Thanh toan toan bo</option>
            </select>
          </label>
          <p>Giam gia: {discountPercent}%</p>
          <p>Can thanh toan: {payableNow.toLocaleString("vi-VN")}d</p>
          <Button onClick={confirmBooking}>Xac nhan dat san</Button>
        </aside>
      </section>
      <Toast message={toast} onClose={() => setToast("")} />
    </main>
  );
}
