// src/components/SmartExpenseTracker/styles.js

export default {
  root: { 
    minHeight: "100vh", 
    background: "#0a0a0f", 
    fontFamily: "'Syne', sans-serif", 
    color: "#e2e8f0", 
    padding: "24px 16px 60px" 
  },
  
  container: { 
    maxWidth: 860, 
    margin: "0 auto" 
  },
  
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
  
  titleAccent: { 
    color: "#4ade80" 
  },
  
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
  },
  
  cards: { 
    display: "grid", 
    gridTemplateColumns: "1.4fr 1fr 1fr", 
    gap: 16, 
    marginBottom: 32 
  },
  
  card: { 
    background: "#111827", 
    border: "1px solid #1e293b", 
    borderRadius: 16, 
    padding: "20px 22px" 
  },
  
  cardBalance: { 
    background: "linear-gradient(135deg, #0f1f0f 0%, #111827 100%)", 
    borderColor: "#16a34a33" 
  },
  
  cardIncome: {}, 
  
  cardExpense: {},
  
  cardLabel: { 
    fontSize: 11, 
    color: "#475569", 
    textTransform: "uppercase", 
    letterSpacing: 1, 
    marginBottom: 8, 
    fontFamily: "'IBM Plex Mono', monospace" 
  },
  
  cardValue: { 
    fontSize: "clamp(20px, 3vw, 30px)", 
    fontWeight: 800, 
    letterSpacing: "-0.5px" 
  },
  
  cardSub: { 
    fontSize: 12, 
    color: "#475569", 
    marginTop: 6, 
    fontFamily: "'IBM Plex Mono', monospace" 
  },
  
  section: { 
    background: "#111827", 
    border: "1px solid #1e293b", 
    borderRadius: 16, 
    padding: 24, 
    marginBottom: 20 
  },
  
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 700, 
    marginBottom: 20, 
    color: "#f1f5f9" 
  },
  
  typeToggle: { 
    display: "flex", 
    gap: 8, 
    marginBottom: 16 
  },
  
  typeBtn: { 
    flex: 1, 
    padding: "10px 0", 
    borderRadius: 8, 
    border: "1px solid #1e293b", 
    background: "transparent", 
    color: "#64748b", 
    fontSize: 14, 
    fontWeight: 600, 
    cursor: "pointer", 
    transition: "all 0.2s", 
    fontFamily: "'Syne', sans-serif" 
  },
  
  typeBtnExpenseActive: { 
    background: "#1f0a0a", 
    borderColor: "#dc262633", 
    color: "#f87171" 
  },
  
  typeBtnIncomeActive: { 
    background: "#0a1f0a", 
    borderColor: "#16a34a33", 
    color: "#4ade80" 
  },
  
  formRow: { 
    display: "flex", 
    gap: 10, 
    flexWrap: "wrap" 
  },
  
  input: { 
    flex: 1, 
    minWidth: 160, 
    background: "#0f172a", 
    border: "1px solid #1e293b", 
    borderRadius: 10, 
    padding: "12px 14px", 
    color: "#f1f5f9", 
    fontSize: 14, 
    outline: "none", 
    fontFamily: "'Syne', sans-serif" 
  },
  
  select: { 
    background: "#0f172a", 
    border: "1px solid #1e293b", 
    borderRadius: 10, 
    padding: "12px 14px", 
    color: "#f1f5f9", 
    fontSize: 14, 
    outline: "none", 
    cursor: "pointer", 
    fontFamily: "'Syne', sans-serif" 
  },
  
  addBtn: { 
    background: "#16a34a", 
    color: "#fff", 
    border: "none", 
    borderRadius: 10, 
    padding: "12px 24px", 
    fontSize: 15, 
    fontWeight: 700, 
    cursor: "pointer", 
    transition: "all 0.2s", 
    fontFamily: "'Syne', sans-serif", 
    whiteSpace: "nowrap" 
  },
  
  error: { 
    color: "#f87171", 
    fontSize: 13, 
    marginTop: 10, 
    fontFamily: "'IBM Plex Mono', monospace" 
  },
  
  filterRow: { 
    display: "flex", 
    flexWrap: "wrap", 
    gap: 8, 
    alignItems: "center", 
    marginBottom: 20 
  },
  
  filterLabel: { 
    fontSize: 12, 
    color: "#475569", 
    fontFamily: "'IBM Plex Mono', monospace", 
    marginRight: 4 
  },
  
  filterPill: { 
    padding: "6px 14px", 
    borderRadius: 20, 
    border: "1px solid #1e293b", 
    background: "transparent", 
    color: "#64748b", 
    fontSize: 12, 
    fontWeight: 600, 
    cursor: "pointer", 
    transition: "all 0.2s", 
    fontFamily: "'Syne', sans-serif" 
  },
  
  filterPillActive: { 
    background: "#0a1f0a", 
    borderColor: "#16a34a", 
    color: "#4ade80" 
  },
  
  listHeader: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 16 
  },
  
  countBadge: { 
    fontSize: 12, 
    color: "#475569", 
    fontFamily: "'IBM Plex Mono', monospace" 
  },
  
  list: { 
    display: "flex", 
    flexDirection: "column", 
    gap: 4 
  },
  
  txRow: { 
    display: "flex", 
    alignItems: "center", 
    gap: 14, 
    padding: "12px 14px", 
    borderRadius: 10, 
    transition: "background 0.15s", 
    cursor: "default" 
  },
  
  catDot: { 
    width: 10, 
    height: 10, 
    borderRadius: "50%", 
    flexShrink: 0 
  },
  
  txInfo: { 
    flex: 1, 
    display: "flex", 
    flexDirection: "column", 
    gap: 3 
  },
  
  txDesc: { 
    fontSize: 15, 
    fontWeight: 600, 
    color: "#e2e8f0" 
  },
  
  txMeta: { 
    fontSize: 12, 
    color: "#475569", 
    fontFamily: "'IBM Plex Mono', monospace" 
  },
  
  txAmount: { 
    fontSize: 16, 
    fontWeight: 700, 
    fontFamily: "'IBM Plex Mono', monospace", 
    whiteSpace: "nowrap" 
  },
  
  delBtn: { 
    background: "none", 
    border: "none", 
    color: "#374151", 
    fontSize: 14, 
    cursor: "pointer", 
    transition: "all 0.2s", 
    padding: "4px 6px" 
  },
  
  empty: { 
    textAlign: "center", 
    padding: "40px 0", 
    color: "#475569" 
  },
  
  emptyIcon: { 
    fontSize: 48, 
    marginBottom: 12 
  },
  
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
  },
  
  interviewSection: { 
    background: "#0d1117", 
    border: "1px solid #1e293b", 
    borderRadius: 16, 
    padding: 24, 
    marginTop: 8 
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