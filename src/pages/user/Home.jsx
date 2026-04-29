import { useMemo, useState } from "react";
import EmptyState from "../../components/common/EmptyState";
import SkeletonLoading from "../../components/common/SkeletonLoading";
import FieldCard from "../../components/user/FieldCard";
import SearchAndFilters from "../../components/user/SearchAndFilters";
import { fields, topClubs, userBenefits } from "../../data";

export default function Home() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState(900000);
  const [loading] = useState(false);

  const filtered = useMemo(
    () =>
      fields.filter((item) => {
        const queryMatched = item.name.toLowerCase().includes(query.toLowerCase());
        const areaMatched = area ? item.area === area : true;
        const typeMatched = type ? item.type === type : true;
        const priceMatched = item.price <= maxPrice;
        return queryMatched && areaMatched && typeMatched && priceMatched;
      }),
    [query, area, type, maxPrice]
  );

  return (
    <main className="container page">
      <section className="hero-landing panel">
        <div>
          <p className="landing-kicker">Find courts and players near you</p>
          <h1>Dat san bong da online nhanh, de, va linh hoat</h1>
          <p>
            Tim san trong, ket noi doi bong, dat lich theo khung gio va theo doi lich su tran dau ngay tren mot nen tang.
          </p>
        </div>
        <div className="hero-quick">
          <h3>Tai sao chon Football Booking?</h3>
          <div className="simple-list">
            {userBenefits.map((benefit) => (
              <div key={benefit} className="line-item">
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SearchAndFilters
        query={query}
        setQuery={setQuery}
        area={area}
        setArea={setArea}
        type={type}
        setType={setType}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      {loading ? (
        <section className="field-grid">{Array.from({ length: 6 }).map((_, index) => <SkeletonLoading key={index} />)}</section>
      ) : filtered.length ? (
        <section className="field-grid">{filtered.map((field) => <FieldCard field={field} key={field.id} />)}</section>
      ) : (
        <EmptyState title="Khong tim thay san phu hop" desc="Hay thay doi bo loc de mo rong ket qua." />
      )}

      <section className="panel top-clubs">
        <h2>Cac cum san noi bat</h2>
        <div className="club-grid">
          {topClubs.map((club) => (
            <article className="club-card" key={club.id}>
              <h3>{club.name}</h3>
              <p>{club.address}</p>
              <strong>{club.area}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
