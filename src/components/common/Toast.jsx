export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast">
      <p>{message}</p>
      <button onClick={onClose}>An</button>
    </div>
  );
}
