import { useEffect, useReducer } from "react";
import { filterTransactionsByUserId } from "../utils/utils";

export const homeActions = {
  SELECT_USER: "SELECT_USER",
  SET_TRANSACTIONS: "SET_TRANSACTIONS",
};

const homeReducer = (state, action) => {
  if (action.type === homeActions.SET_TRANSACTIONS) {
    return {
      currentUser: state.currentUser,
      userTransactions: filterTransactionsByUserId(
        action.data,
        state.currentUser
      ),
      transactions: action.data,
    };
  }
  if (action.type === homeActions.SELECT_USER) {
    return {
      currentUser: action.data,
      userTransactions: state.userTransactions,
      transactions: state.transactions,
    };
  }
  return {
    currentUser: state.currentUser,
    userTransactions: state.userTransactions,
    transactions: state.transactions,
  };
};

let transactionData;

export default function useTransactions() {
  const [homeState, dispatchHome] = useReducer(homeReducer, {
    currentUser: 1,
    userTransactions: [],
    transactions: [],
  });

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        transactionData = data;
        dispatchHome({
          type: homeActions.SET_TRANSACTIONS,
          data: data.transactions,
        });
      });
  }, []);

  useEffect(() => {
    dispatchHome({
      type: homeActions.SET_TRANSACTIONS,
      data: transactionData?.transactions,
    });
  }, [homeState.currentUser]);

  return [homeState, dispatchHome];
}
