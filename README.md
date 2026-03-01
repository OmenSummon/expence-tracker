# Smart Expense Tracker

A modern, feature-rich expense tracker application built with React and Vite that helps you log daily transactions, categorize spending, and visualize your monthly budget.

## ✨ Features

- **Transaction Management**: Add, view, and delete income and expense transactions
- **Smart Categorization**: Organize expenses by categories (Food, Transport, Shopping, Health, Entertainment, Salary, Freelance, Other)
- **Summary Cards**: Real-time display of total income, total expenses, and current balance
- **Transaction Filtering**: Filter transactions by category to focus on specific spending areas
- **Transaction List**: View all transactions with timestamps and category labels
- **Local Storage**: All data is saved locally in your browser's storage
- **Toast Notifications**: Get instant feedback when actions are completed
- **Modern UI**: Dark theme with a sleek, professional design

## 🚀 Deployment & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OmenSummon/expence-tracker.git
cd expence-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
expense-tracker/
├── index.html           # HTML entry point
├── main.jsx             # React application entry
├── SmartExpenseTracker.jsx  # Main app component
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── index.css            # Global styles
│
├── Components:
├── Header.jsx           # App header
├── SummaryCards.jsx     # Income, expense, balance display
├── TransactionForm.jsx  # Add transaction form
├── FilterBar.jsx        # Category filter
├── TransactionList.jsx  # Transactions display
├── TransactionItem.jsx  # Individual transaction
├── Toast.jsx            # Notification component
└── InterviewSection.jsx # Interview/challenge section

├── Utilities:
├── cons.js              # Constants (categories, colors)
├── formatter.js         # Number and date formatting
├── generators.js        # ID and data generators
├── styles.js            # Inline style definitions
├── useLocalStorage.js   # Local storage hook
└── useToast.js          # Toast notification hook
```

## 🔧 Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 4.0.0
- **Styling**: CSS-in-JS with inline styles
- **State Management**: React hooks (useState, useEffect)
- **Storage**: Browser LocalStorage API
- **Languages**: JavaScript (ES6+), JSX

## 💡 How to Use

1. **Add a Transaction**:
   - Enter the transaction amount
   - Select the transaction type (Income/Expense)
   - Choose a category
   - Click "Add Transaction"

2. **View Summary**:
   - Total Income displays all incoming funds
   - Total Expenses shows all outgoing funds
   - Balance shows your net position (Income - Expenses)

3. **Filter Transactions**:
   - Click on any category button to filter transactions
   - Click "All" to see all transactions

4. **Delete Transactions**:
   - Click the delete button (trash icon) on any transaction to remove it

5. **Data Persistence**:
   - All transactions are automatically saved to browser storage
   - Your data persists even after closing the browser

## 🎨 Color Scheme

- **Primary Color**: #4ade80 (Green)
- **Background**: #0a0a0f (Dark gray)
- **Text**: #e2e8f0 (Light gray)
- **Category Colors**: Each category has a unique color for visual identification

## 📝 Categories

- 🍔 **Food**: #f97316
- 🚗 **Transport**: #3b82f6
- 🛍️ **Shopping**: #a855f7
- 💊 **Health**: #22c55e
- 🎬 **Entertainment**: #8b5cf6
- 💼 **Salary**: #14b8a6
- 💻 **Freelance**: #8b5cf6
- ⭐ **Other**: #94a3b8

## 🐛 Troubleshooting

### White blank screen on startup
- **Solution**: Ensure all dependencies are installed with `npm install`
- Check that index.css is properly imported in main.jsx
- Clear browser cache and reload the page

### Transactions not saving
- **Solution**: Check browser localStorage is enabled
- Open DevTools (F12) > Application > LocalStorage
- Verify data is being stored

### Styling issues
- **Solution**: Ensure vite.config.js is properly configured
- Check that inline styles in components are correctly formatted
- Restart the dev server with `npm run dev`

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers with ES6 support

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

**Souparno Sarkar (OmenSummon)**

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

---

**Note**: This application stores data locally in your browser. No data is sent to external servers. Each browser/device will have its own separate transaction history.
