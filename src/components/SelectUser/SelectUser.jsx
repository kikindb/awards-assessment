import React from "react";
import styles from "./SelectUser.module.css";

export default function SelectUser({ users = [], onSelectUser }) {
  return (
    <section className={styles.SelectUserContainer}>
      <div className={styles.formContainer}>
        <label htmlFor="selectUser">Select User: </label>
        <select
          aria-label="select user"
          id="selectUser"
          onChange={onSelectUser}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
