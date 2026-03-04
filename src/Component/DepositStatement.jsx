// src/pages/DepositStatement.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/style.css";

const DepositStatement = () => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (Number(amount) < 300) {
      alert("Minimum amount should be ₹300.");
    } else {
      // Navigate with amount passed via state
      navigate("/deposit-statement", { state: { amount } });
    }
  };

  return (
    <div className="amount-container">
      <div className="amount-box">
        <label htmlFor="amount">Amount</label>
        <div className="input-group">
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>

      <div className="instructions-box">
        <ol>
          <li>
            Deposit money only in the below available accounts to get the
            fastest credits and avoid possible delays.
          </li>
          <li>
            Deposits made 45 minutes after the account removal from the site are
            valid &amp; will be added to their wallets.
          </li>
          <li>
            Site is not responsible for money deposited to Old, Inactive or
            Closed accounts.
          </li>
          <li>After deposit, add your UTR and amount to receive balance.</li>
          <li>NEFT receiving time varies from 40 minutes to 2 hours.</li>
          <li>
            In case of account modification: payment valid for 1 hour after
            changing account details in deposit page.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DepositStatement;
