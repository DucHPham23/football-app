import { areas, fieldTypes } from "../../data";
import Input from "../common/Input";

export default function SearchAndFilters({ query, setQuery, area, setArea, type, setType, maxPrice, setMaxPrice }) {
  return (
    <section className="panel">
      <div className="search-row">
        <Input label="Tim kiem san" placeholder="Nhap ten san..." value={query} onChange={(event) => setQuery(event.target.value)} />
      </div>
      <div className="filter-grid">
        <label>
          <span>Khu vuc</span>
          <select value={area} onChange={(event) => setArea(event.target.value)}>
            <option value="">Tat ca</option>
            {areas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Loai san</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="">Tat ca</option>
            {fieldTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Gia toi da</span>
          <input type="range" min="200000" max="900000" step="50000" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} />
          <strong>{maxPrice.toLocaleString("vi-VN")}d</strong>
        </label>
      </div>
    </section>
  );
}
