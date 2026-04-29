import { hourlySlots } from "../../data";

export default function SlotPicker({ basePrice, selected, onSelect }) {
  return (
    <section className="panel">
      <h3>Lich trong theo khung gio</h3>
      <div className="slot-grid">
        {hourlySlots.map((slot) => {
          const slotPrice = Math.round(basePrice * slot.priceRate);
          const isSelected = selected?.time === slot.time;

          return (
            <button
              key={slot.time}
              className={`slot ${slot.booked ? "booked" : "free"} ${isSelected ? "active" : ""}`}
              onClick={() => !slot.booked && onSelect({ ...slot, slotPrice })}
              disabled={slot.booked}
            >
              <span>{slot.time}</span>
              <small>{slotPrice.toLocaleString("vi-VN")}d</small>
            </button>
          );
        })}
      </div>
    </section>
  );
}
