import { CATEGORIES } from "../constants";

export default function FilterBar({ filter, onFilterChange }) {
  return (
    <div style={styles.filterRow}>
      <span style={styles.filterLabel}>Filter:</span>
      {["All", ...CATEGORIES].map(cat => (
        <button 
          key={cat} 
          className="filter-pill"
          onClick={() => onFilterChange(cat)}
          style={{ 
            ...styles.filterPill, 
            ...(filter === cat ? styles.filterPillActive : {}) 
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

const styles = {
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
  }
};