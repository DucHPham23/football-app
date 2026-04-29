const points = [30, 55, 40, 72, 65, 82, 48];

export default function BarChart() {
  return (
    <section className="panel chart">
      <h3>Thong ke 7 ngay</h3>
      <div className="bars">
        {points.map((point, index) => (
          <div key={index} style={{ height: `${point}%` }} />
        ))}
      </div>
    </section>
  );
}
