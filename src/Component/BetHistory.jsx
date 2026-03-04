import React from "react";
import "../Css/style.css"; // Ensure this path is correct

const BetHistory = () => {
  return (
    <div className="deposit-statement-container">
      {/* Header */}
      <div className="deposit-header">BET HISTORY</div>

      {/* Filters */}
       <div className="filters-row">
        <input type="date" className="filter-input" placeholder="From" />
        <input type="date" className="filter-input" placeholder="To" />
        <select className="filter-input">
          <option value="all">Sports Type</option>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
          <option value="tennis">Tennis</option>
          <option value="casino">Casino</option>
        </select>
        <select className="filter-input">
         
          <option value="cricket">Bet Status</option>
          <option value="football">Matched</option>
          <option value="tennis">Deleted</option>
          
        </select>
        <button className="submit-btn">Submit</button>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="statement-table">
          <thead>
            <tr>
              <th>NO</th>
              <th>Event Name</th>
              <th>Nation</th>
              <th>Event Type</th>
              <th>Type</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>PNL</th>
              <th>Place Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="9" className="no-records">
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

export default BetHistory;
