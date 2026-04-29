import { Link } from "react-router-dom";

export default function FieldCard({ field }) {
  return (
    <article className="card field-card">
      <img src={field.images[0]} alt={field.name} />
      <div className="card-body">
        <h3>{field.name}</h3>
        <p>{field.area}</p>
        <p>{field.type}</p>
        <p>{field.rating}</p>
        <strong>{field.price.toLocaleString("vi-VN")}d / tran</strong>
        <Link to={`/field/${field.id}`} className="text-link">
          Xem chi tiet
        </Link>
      </div>
    </article>
  );
}
