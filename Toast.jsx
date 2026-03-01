export default function Toast({ message, onClose }) {
  if (!message) return null;
  
  return (
    <div className="toast" style={styles.toast}>
      {message}
    </div>
  );
}

const styles = {
  toast: {
    position: "fixed",
    bottom: 32,
    right: 32,
    background: "#16a34a",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 600,
    zIndex: 1000,
    fontFamily: "'Syne', sans-serif",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
  }
};