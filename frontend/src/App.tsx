import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Transactions from './pages/transactions';
import Analytics from './pages/analytics';
import AddExpense from './pages/AddExpense';
import SaveGoals from './pages/savegoals';
import Budgeting from './pages/budgeting';

function App() {
  return (
    <Routes>
      <Route path="/add" element={<AddExpense />} />

      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/savegoals" element={<SaveGoals />} />
      <Route path="/budgeting" element={<Budgeting/>} />


      
    </Routes>
  );
}

export default App;
