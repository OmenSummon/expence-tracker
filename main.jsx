import React from 'react';
import ReactDOM from 'react-dom/client';
import SmartExpenseTracker from './SmartExpenseTracker.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SmartExpenseTracker />
  </React.StrictMode>,
);
