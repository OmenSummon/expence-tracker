import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage.js";
import { useToast } from "./useToast.js";
import styles from "./styles.js";

// Subcomponents
import Header from "./Header";
import SummaryCards from "./SummaryCards";
import TransactionForm from "./TransactionForm";
import FilterBar from "./FilterBar";
import TransactionList from "./TransactionList";
import Toast from "./Toast";
export default function SmartExpenseTracker() {
 const [transactions, setTransactions] = useLocalStorage("sxp_transactions", []);
 const { toast, setToast } = useToast(2500);
 const [filter, setFilter] = useState("All");

 const filtered = filter === "All"
 ? transactions
 : transactions.filter(t => t.category === filter);

 const handleAddTransaction = (newTx) => {
 setTransactions(prev => [newTx, ...prev]);
 setToast(`${newTx.type === "income" ? "Income" : "Expense"} added!`);
 };

 const handleDeleteTransaction = (id) => {
 setTransactions(prev => prev.filter(t => t.id !== id));
 setToast("Transaction deleted");
 };

 return (
 <div style={styles.root}>
 <style>{`
 @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
 * { box-sizing: border-box; margin: 0; padding: 0; }
 body { background: #0a0a0f; }
 ::-webkit-scrollbar { width: 4px; }
 ::-webkit-scrollbar-track { background: #111; }
 ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
 .tx-row:hover { background: rgba(255,255,255,0.04) !important; }
 .del-btn:hover { color: #ef4444 !important; transform: scale(1.2); }
 .filter-pill:hover { border-color: #4ade80 !important; color: #4ade80 !important; }
 .add-btn:hover { background: #22c55e !important; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(74,222,128,0.3) !important; }
 @keyframes slideIn { from { opacity:0; transform: translateX(40px); } to { opacity:1; transform: translateX(0); } }
 @keyframes fadeUp { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }
 @keyframes toastIn { from { opacity:0; transform: translateY(20px) scale(0.9); } to { opacity:1; transform: translateY(0) scale(1); } }
 .tx-item { animation: fadeUp 0.3s ease forwards; }
 .toast { animation: toastIn 0.3s ease forwards; }
 `}</style>
 <Toast message={toast} onClose={() => setToast(null)} />
 <div style={styles.container}>
 <Header />
 <SummaryCards transactions={transactions} />
 <TransactionForm onAdd={handleAddTransaction} />
 <FilterBar filter={filter} onFilterChange={setFilter} />
 <section style={styles.section}>
 <div style={styles.listHeader}>
 <h2 style={styles.sectionTitle}>Transactions</h2>
 <span style={styles.countBadge}>{filtered.length} shown</span>
 </div>
 <TransactionList
 transactions={filtered}
 onDelete={handleDeleteTransaction}
 />
 </section>
 </div>
 </div>
 );
}


