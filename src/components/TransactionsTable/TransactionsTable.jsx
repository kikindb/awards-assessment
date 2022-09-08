import { calculatePointsByTransaction } from "../../utils/utils";
import styles from "./TransactionsTable.module.css";

export default function TransactionsTable({ transactions }) {
  return (
    <section className={styles.TableContainer}>
      <header>
        <h2>Transactions</h2>
      </header>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item, idx) => {
            return (
              <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>${item.amount}</td>
                <td>{item.date}</td>
                <td>{calculatePointsByTransaction(item.amount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
