import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div style={styles.empty}>
        <div style={styles.emptyIcon}>💸</div>
        <p>No transactions yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div style={styles.list}>
      {transactions.map((tx, i) => (
        <TransactionItem 
          key={tx.id} 
          tx={tx} 
          onDelete={onDelete} 
          index={i} 
        />
      ))}
    </div>
  );
}

const styles = {
  list: { display: "flex", flexDirection: "column", gap: 4 },
  empty: { 
    textAlign: "center", 
    padding: "40px 0", 
    color: "#475569" 
  },
  emptyIcon: { fontSize: 48, marginBottom: 12 }
};