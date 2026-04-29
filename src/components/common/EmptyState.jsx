export default function EmptyState({ title, desc }) {
  return (
    <section className="empty">
      <h3>{title}</h3>
      <p>{desc}</p>
    </section>
  );
}
