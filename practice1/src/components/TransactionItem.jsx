import React from "react";
function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <li>
      {transaction.text}  ₹{transaction.amount} {transaction.type}
      <button onClick={()=>deleteTransaction(transaction.id)}>
        Delete
      </button>
    </li>
  );
}
export default TransactionItem;