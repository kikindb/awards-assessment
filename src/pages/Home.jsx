import Layout from "./../components/UI/Layout";
import RewardsBoard from "../components/RewardsBoard/RewardsBoard";
import SelectUser from "../components/SelectUser/SelectUser";
import TransactionsTable from "../components/TransactionsTable/TransactionsTable";
import useTransactions, { homeActions } from "../hooks/useTransactions";

import { calculateRewards, getAllUsersFromTransactions } from "../utils/utils";

export default function Home() {
  const [homeState, dispatchHome] = useTransactions();

  const handleSelect = (event) => {
    dispatchHome({
      type: homeActions.SELECT_USER,
      data: Number(event.target.value),
    });
  };

  return (
    <Layout>
      <SelectUser
        users={getAllUsersFromTransactions(homeState.transactions)}
        onSelectUser={handleSelect}
      />
      <RewardsBoard points={calculateRewards(homeState.userTransactions)} />
      <TransactionsTable transactions={homeState.userTransactions} />
    </Layout>
  );
}
