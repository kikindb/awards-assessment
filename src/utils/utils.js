export function calculatePointsByTransaction(amount) {
  if (amount <= 50) return 0;
  let accumulate =
    (amount < 100 ? amount - 50 : 50) +
    (amount - 100 > 0 ? (amount - 100) * 2 : 0);
  return accumulate;
}

export function filterTransactionsByUserId(transactions, userId) {
  if (!transactions || userId === undefined || userId === null) return [];
  return transactions.filter((trans) => trans.user.id === userId);
}

export function getAllUsersFromTransactions(transactions) {
  if (!transactions) return [];
  const usersSet = new Set();
  const users = transactions.map((trans) => trans.user);

  const uniqueUsers = users.filter((el) => {
    const duplicate = usersSet.has(el.id);
    usersSet.add(el.id);
    return !duplicate;
  });

  return uniqueUsers;
}

export function calculateRewards(transactions) {
  if (!transactions) return 0;
  const rewards = transactions
    .map((trans) => {
      return calculatePointsByTransaction(trans.amount);
    })
    .reduce((prev, curr) => {
      return prev + curr;
    }, 0);
  return rewards;
}

export function transformDate(date) {
  return new Intl.DateTimeFormat("en-US").format(new Date(date));
}

export function sortTransactionsByDate(transactions, sortType = "DESC") {
  if (!transactions) return [];
  const transactionsSorted = [...transactions];
  if (sortType === "DESC") {
    transactionsSorted.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } else {
    transactionsSorted.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }

  return transactionsSorted;
}
