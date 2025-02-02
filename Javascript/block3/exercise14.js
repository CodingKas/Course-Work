function budgetTracker(expenses) {
  const conversionRate = 0.0089;
  let totalExpenseYen = 0;

  expenses.forEach((expenses) => {
    totalExpenseYen += Number(Expense);
  });
  const totalExpenseDollars = totalExpenseYen * conversionRate;
  const averageDailyExpense = totalExpenseDollars / expenses.length;
  return Math.round(averageDailyExpense);
}

module.exports = {
  budgetTracker,
};
