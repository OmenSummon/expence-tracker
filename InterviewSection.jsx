export default function InterviewSection() {
  const notes = [
    {
      q: "Why useState for transactions?",
      a: "useState holds the transactions array in component memory. When setTransactions is called, React re-renders the UI automatically — no manual DOM manipulation needed."
    },
    {
      q: "Why two useEffect hooks?",
      a: "First useEffect([transactions]) runs after every change to persist data to localStorage. Second useEffect([toast]) manages the auto-dismiss timer and returns a cleanup function to cancel the timeout — preventing memory leaks."
    },
    {
      q: "How does localStorage persistence work?",
      a: "We lazy-initialize state with a function: useState(() => JSON.parse(localStorage.getItem(...)) || []). This reads data only once on mount. useEffect syncs back on every change."
    },
    {
      q: "How does filtering work without extra state?",
      a: "We derive `filtered` directly from `transactions` using .filter() — it's a computed value, not stored state. This follows the 'single source of truth' principle."
    },
    {
      q: "How would you extend this to useContext or Redux?",
      a: "If this component grew across multiple pages/components, we'd lift state into a Context Provider. For complex async logic (API calls, caching), Redux Toolkit's createSlice and createAsyncThunk would be appropriate."
    }
  ];

  return (
    <section style={styles.interviewSection}>
      <h2 style={{ ...styles.sectionTitle, marginBottom: 16 }}>
        🎙 Interview Discussion Guide
      </h2>
      {notes.map(({ q, a }) => (
        <div key={q} style={styles.interviewCard}>
          <div style={styles.interviewQ}>Q: {q}</div>
          <div style={styles.interviewA}>{a}</div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  interviewSection: { 
    background: "#0d1117", 
    border: "1px solid #1e293b", 
    borderRadius: 16, 
    padding: 24, 
    marginTop: 8 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 700, 
    marginBottom: 20, 
    color: "#f1f5f9" 
  },
  interviewCard: { 
    background: "#111827", 
    border: "1px solid #1e293b", 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 12 
  },
  interviewQ: { 
    fontSize: 14, 
    fontWeight: 700, 
    color: "#4ade80", 
    marginBottom: 8, 
    fontFamily: "'IBM Plex Mono', monospace" 
  },
  interviewA: { 
    fontSize: 14, 
    color: "#94a3b8", 
    lineHeight: 1.65 
  }
};