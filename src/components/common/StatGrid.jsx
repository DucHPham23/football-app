export default function StatGrid({ stats }) {
  return (
    <section className="stats-grid">
      {stats.map((item) => (
        <article key={item.title} className="panel stat-card">
          <h4>{item.title}</h4>
          <p>{item.value}</p>
        </article>
      ))}
    </section>
  );
}
