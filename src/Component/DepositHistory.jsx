import React from "react";
import "../Css/style.css"; // Ensure this path is correct

const DepositHistory = () => {
  return (
    <div className="deposit-statement-container">
      {/* Header */}
      <div className="deposit-header">DEPOSIT STATEMENTS</div>

      {/* Filters */}
       <div className="filters-row">
        <input type="date" className="filter-input" placeholder="From" />
        <input type="date" className="filter-input" placeholder="To" />
        <select className="filter-input">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="approved">Rejected</option>
        </select>
        <button className="submit-btn">Submit</button>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="statement-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="5" className="no-records">
                No records found
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination">
          <button>&laquo;</button>
          <button>&raquo;</button>
        </div>
      </div>
    </div>
  );
};

export default DepositHistory;
