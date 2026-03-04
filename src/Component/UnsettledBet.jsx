import React from "react";
import "../Css/style.css";

const BetHistoryTable = () => {
  const unsettledBets = []; // Empty for now

  return (
    <div className="bet-history-container">
      <div className="header">UNSETTLE BET HISTORY</div>

      {/* Responsive table wrapper */}
      <div className="table-responsive-wrapper">
        <table className="bet-table">
          <thead>
            <tr>
              <th>No</th>
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
            {unsettledBets.length === 0 ? (
              <tr>
                <td colSpan="9" className="no-result">
                  No Result Found
                </td>
              </tr>
            ) : (
              unsettledBets.map((bet, index) => (
                <TableRow key={index} bet={bet} index={index + 1} />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button disabled>&laquo;</button>
        <span className="page-number active">1</span>
        <button disabled>&raquo;</button>
      </div>
    </div>
  );
};

const TableRow = ({ bet, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{bet.eventName}</td>
      <td>{bet.nation}</td>
      <td>{bet.eventType}</td>
      <td>{bet.type}</td>
      <td>{bet.rate}</td>
      <td>{bet.amount}</td>
      <td>{bet.pnl}</td>
      <td>{bet.placeDate}</td>
    </tr>
  );
};

export default BetHistoryTable;
