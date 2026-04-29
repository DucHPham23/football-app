import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import SlotPicker from "../../components/user/SlotPicker";
import { fields } from "../../data";

export default function FieldDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const field = fields.find((item) => item.id === id) || fields[0];

  return (
    <main className="container page detail-page">
      <section className="hero panel">
        <img src={field.images[0]} alt={field.name} className="hero-image" />
        <div>
          <h1>{field.name}</h1>
          <p>{field.description}</p>
          <p>Khu vuc: {field.area}</p>
          <p>Loai san: {field.type}</p>
          <p>Gia goc: {field.price.toLocaleString("vi-VN")}d / tran</p>
          <p>{field.rating}</p>
          <Button onClick={() => navigate(`/booking/${field.id}`)}>Dat san</Button>
        </div>
      </section>

      <section className="gallery-grid">
        {field.images.map((image) => (
          <img src={image} key={image} alt={field.name} />
        ))}
      </section>

      <SlotPicker basePrice={field.price} selected={selected} onSelect={(slot) => setSelected(slot)} />

      {selected && (
        <section className="panel booking-summary">
          <p>Khung gio da chon: {selected.time}</p>
          <p>Gia: {selected.slotPrice.toLocaleString("vi-VN")}d</p>
          <Button variant="secondary" onClick={() => setShowModal(true)}>
            Xem thong tin truoc khi dat
          </Button>
        </section>
      )}

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h3>Xac nhan thong tin</h3>
        <p>San: {field.name}</p>
        <p>Khung gio: {selected?.time}</p>
        <p>Tam tinh: {selected?.slotPrice?.toLocaleString("vi-VN")}d</p>
      </Modal>
    </main>
  );
}
