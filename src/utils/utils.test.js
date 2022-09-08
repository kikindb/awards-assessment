import {
  calculatePointsByTransaction,
  filterTransactionsByUserId,
  getAllUsersFromTransactions,
  calculateRewards,
} from "./utils";

const TRANSACTIONS = [
  {
    id: 1,
    amount: 120,
    user: {
      id: 1,
      name: "enrique",
    },
    date: "01/01/2022",
  },
  {
    id: 2,
    amount: 250,
    user: {
      id: 1,
      name: "enrique",
    },
    date: "01/02/2022",
  },
  {
    id: 3,
    amount: 50,
    user: {
      id: 2,
      name: "john",
    },
    date: "07/06/2022",
  },
];

describe("Utils tests", () => {
  it("should calculate rewards points by amount", () => {
    expect(calculatePointsByTransaction(120)).toBe(90);
    expect(calculatePointsByTransaction(50)).toBe(0);
    expect(calculatePointsByTransaction(51)).toBe(1);
  });

  it("filterTransactionsByUserId", () => {
    const userId = 1;
    expect(filterTransactionsByUserId(TRANSACTIONS)).toEqual([]);
    expect(filterTransactionsByUserId(undefined, undefined)).toEqual([]);
    expect(filterTransactionsByUserId(null, null)).toEqual([]);
    expect(filterTransactionsByUserId(TRANSACTIONS, null)).toEqual([]);
    expect(filterTransactionsByUserId(TRANSACTIONS, undefined)).toEqual([]);
    expect(filterTransactionsByUserId(TRANSACTIONS, userId)).toEqual([
      TRANSACTIONS[0],
      TRANSACTIONS[1],
    ]);
    expect(filterTransactionsByUserId(TRANSACTIONS, 2)).toEqual([
      TRANSACTIONS[2],
    ]);
  });

  it("getAllUsersFromTransactions", () => {
    expect(getAllUsersFromTransactions(TRANSACTIONS)).toEqual([
      TRANSACTIONS[0].user,
      TRANSACTIONS[2].user,
    ]);
  });

  it("calculateRewards", () => {
    expect(calculateRewards()).toBe(0);
    expect(calculateRewards(TRANSACTIONS)).toBe(440);
  });
});
