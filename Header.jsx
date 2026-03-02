export default function Header() {
  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.title}>
          Smart Expense<br />
          <span style={styles.titleAccent}>Tracker</span>
        </h1>
        <p style={styles.subtitle}>Know where every rupee goes</p>
      </div>
    </header>
  );
}

const styles = {
  header: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "flex-start", 
    marginBottom: 40, 
    flexWrap: "wrap", 
    gap: 16 
  },
  title: { 
    fontSize: "clamp(32px, 5vw, 52px)", 
    fontWeight: 800, 
    lineHeight: 1.1, 
    color: "#f8fafc", 
    letterSpacing: "-1px" 
  },
  titleAccent: { color: "#4ade80" },
  subtitle: { 
    color: "#64748b", 
    marginTop: 8, 
    fontSize: 15, 
    fontFamily: "'IBM Plex Mono', monospace" 
  },
  badge: { 
    background: "#111827", 
    border: "1px solid #1e293b", 
    borderRadius: 8, 
    padding: "8px 14px", 
    fontSize: 12, 
    color: "#4ade80", 
    fontFamily: "'IBM Plex Mono', monospace", 
    whiteSpace: "nowrap" 
  }

};
