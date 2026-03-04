import React, { useEffect, useState } from "react";
import "../Css/style.css";

const AccountStatement = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:8080/api/account/transactions/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTransactions(data);
        } else {
          console.warn("Unexpected response:", data);
          setError("Invalid data format received.");
        }
      })
      .catch((err) => {
        console.error("Error fetching transactions:", err);
        setError("Failed to fetch transactions.");
      })
      .finally(() => setLoading(false));
  }, []);

  let runningBalance = 0;

  return (
    <div className="account-statement-container">
      <div className="account-statement-header">ACCOUNT STATEMENTS</div>

      {/* Filters */}
      <div className="filters">
        <input type="date" className="date-input" />
        <input type="date" className="date-input" />
        <select className="dropdown1">
          <option value="all">All</option>
          <option value="deposit">Deposit/Withdraw</option>
          <option value="game">Game Report</option>
        </select>
        <button className="submit-btn">Submit</button>
      </div>

      {/* Loader / Error */}
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p className="no-records">{error}</p>}

      {/* Statement Table */}
      {!loading && !error && (
        <table className="statement-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Date</th>
              <th>Credit</th>
              <th>Debit</th>
              <th>Balance</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="6" className="no-records">
                  No records found
                </td>
              </tr>
            ) : (
              transactions.map((txn, index) => {
                runningBalance += txn.credit - txn.debit;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{new Date(txn.date).toLocaleString()}</td>
                    <td>{txn.credit !== 0 ? txn.credit.toFixed(2) : ""}</td>
                    <td>{txn.debit !== 0 ? txn.debit.toFixed(2) : ""}</td>
                    <td>{runningBalance.toFixed(2)}</td>
                    <td>{txn.remark}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      )}

      {/* Pagination Placeholder */}
      <div className="pagination">
        <button disabled>&laquo;</button>
        <button disabled>&raquo;</button>
      </div>
    </div>
  );
};

export default AccountStatement;
