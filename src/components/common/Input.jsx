export default function Input({ label, error, ...props }) {
  return (
    <label className="input-wrap">
      <span>{label}</span>
      <input {...props} />
      {error && <small>{error}</small>}
    </label>
  );
}
