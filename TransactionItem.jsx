import { CATEGORY_COLORS } from "./cons.js";
import { formatCurrency } from "./formatter.js";

export default function TransactionItem({ tx, onDelete, index }) {
  return (
    <div 
      className="tx-row tx-item"
      style={{ 
        ...styles.txRow, 
        animationDelay: `${index * 0.04}s` 
      }}
    >
      <div style={{ 
        ...styles.catDot, 
        background: CATEGORY_COLORS[tx.category] || "#94a3b8" 
      }} />
      
      <div style={styles.txInfo}>
        <span style={styles.txDesc}>{tx.description}</span>
        <span style={styles.txMeta}>
          {tx.category} · {new Date(tx.date).toLocaleDateString("en-IN", { 
            day: "numeric", 
            month: "short", 
            year: "numeric" 
          })}
        </span>
      </div>
      
      <span style={{ 
        ...styles.txAmount, 
        color: tx.type === "income" ? "#4ade80" : "#f87171" 
      }}>
        {tx.type === "income" ? "+" : "−"}{formatCurrency(tx.amount)}
      </span>
      
      <button 
        className="del-btn" 
        style={styles.delBtn} 
        onClick={() => onDelete(tx.id)} 
        title="Delete"
      >
        ✕
      </button>
    </div>
  );
}

const styles = {
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
  }

};


