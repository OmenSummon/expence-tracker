import { formatCurrency } from "./formatter.js";
export default function SummaryCards({ transactions }) {
  const balance = transactions.reduce((acc, t) => 
    acc + (t.type === "income" ? t.amount : -t.amount), 0);
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((a, t) => a + t.amount, 0);
  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, t) => a + t.amount, 0);

  return (
    <div style={styles.cards}>
      <div style={{ ...styles.card, ...styles.cardBalance }}>
        <div style={styles.cardLabel}>Net Balance</div>
        <div style={{ ...styles.cardValue, color: balance >= 0 ? "#4ade80" : "#f87171" }}>
          {balance < 0 ? "−" : "+"}{formatCurrency(balance)}
        </div>
        <div style={styles.cardSub}>{transactions.length} transactions</div>
      </div>
      <div style={{ ...styles.card, ...styles.cardIncome }}>
        <div style={styles.cardLabel}>Total Income</div>
        <div style={{ ...styles.cardValue, color: "#4ade80" }}>
          +{formatCurrency(totalIncome)}
        </div>
      </div>
      <div style={{ ...styles.card, ...styles.cardExpense }}>
        <div style={styles.cardLabel}>Total Expenses</div>
        <div style={{ ...styles.cardValue, color: "#f87171" }}>
          −{formatCurrency(totalExpense)}
        </div>
      </div>
    </div>
  );
}

const styles = {
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
  }

};
