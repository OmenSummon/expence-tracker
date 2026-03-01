import { useState } from "react";
import { CATEGORIES } from "../constants";
import { generateId } from "../utils/generators";

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ 
    description: "", 
    amount: "", 
    category: "Food", 
    type: "expense" 
  });
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!form.description.trim()) 
      return setError("Description required");
    
    const amt = parseFloat(form.amount);
    if (!amt || amt <= 0) 
      return setError("Enter a valid positive amount");
    
    setError("");
    const newTx = { 
      id: generateId(), 
      ...form, 
      amount: amt, 
      date: new Date().toISOString() 
    };
    
    onAdd(newTx);
    setForm(f => ({ ...f, description: "", amount: "" }));
  };

  const handleKey = (e) => { 
    if (e.key === "Enter") handleAdd(); 
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Add Transaction</h2>
      
      <div style={styles.typeToggle}>
        {["expense", "income"].map(type => (
          <button 
            key={type} 
            onClick={() => setForm(f => ({ ...f, type }))}
            style={{ 
              ...styles.typeBtn, 
              ...(form.type === type ? 
                (type === "income" ? styles.typeBtnIncomeActive : styles.typeBtnExpenseActive) 
                : {}) 
            }}
          >
            {type === "income" ? "⬆ Income" : "⬇ Expense"}
          </button>
        ))}
      </div>

      <div style={styles.formRow}>
        <input
          style={styles.input} 
          placeholder="Description (e.g. Lunch at café)"
          value={form.description} 
          onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          onKeyDown={handleKey}
        />
        <input
          style={{ ...styles.input, maxWidth: 150 }} 
          placeholder="Amount ₹"
          type="number" 
          min="0" 
          value={form.amount}
          onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
          onKeyDown={handleKey}
        />
        <select 
          style={styles.select} 
          value={form.category} 
          onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
        >
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
        <button className="add-btn" style={styles.addBtn} onClick={handleAdd}>
          + Add
        </button>
      </div>
      
      {error && <p style={styles.error}>⚠ {error}</p>}
    </section>
  );
}

const styles = {
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
  typeToggle: { display: "flex", gap: 8, marginBottom: 16 },
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
  formRow: { display: "flex", gap: 10, flexWrap: "wrap" },
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
  }
};