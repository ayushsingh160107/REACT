export function sum(transactions) {
  return transactions.reduce(
    (acc,t) => {
      if (t.type==="income")
        acc.income+=Number(t.amount);
      else
        acc.expense+=Number(t.amount);
      return acc;
    },
    { income:0,expense:0 }
  );
}