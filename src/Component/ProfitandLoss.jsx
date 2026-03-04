import React, { useState } from "react";
import "../Css/style.css"

const ProfitLoss = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add data-fetch logic here if needed
  };

  return (
    <div className="profit-loss-container">
      {/* BLACK HEADER */}
      <div className="profit-loss-header">
        <h5 className="title">PROFIT/LOSS</h5>
      </div>

      {/* FILTER SECTION */}
      <form className="filter-form" onSubmit={handleSubmit}>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {/* TABLE */}
      <table className="profit-loss-table">
        <thead>
          <tr>
            <th>Event Type</th>
            <th>Event Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" className="no-result">
              No Result Found
            </td>
          </tr>
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="pagination">
        <button disabled>&lt;&lt;</button>
        <button disabled>&gt;&gt;</button>
      </div>
    </div>
  );
};

export default ProfitLoss;
