import React, { useState } from "react";
import Form from "./components/Form";
import TransactionList from "./components/TransactionList";
import { sum } from "./components/Utils";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };
` ` 1``
  const totals = sum(transactions);

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <h3>Income: ₹{totals.income}</h3>
      <h3>Expense: ₹{totals.expense}</h3>
      <Form addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;