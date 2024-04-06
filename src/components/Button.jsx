export default function Button({ onClick, variant, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant === 'secondary' ? 'btn--secondary' : ''}`}
    >
      {children}
    </button>
  );
}
