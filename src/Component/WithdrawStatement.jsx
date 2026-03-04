import React, { useState, useEffect } from "react";
import "../Css/style.css";
import { FaTrash, FaCopy, FaWhatsapp } from "react-icons/fa";
import AddAccount from "./AddAccount";

const WithdrawForm = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [accountData, setAccountData] = useState(null);
  const [amount, setAmount] = useState("");
  const [withdrawalPassword, setWithdrawalPassword] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (!storedUserId) {
      alert("User not logged in.");
    } else {
      setUserId(storedUserId);

      fetch(`http://localhost:8080/api/withdrawals/accounts/${storedUserId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.length > 0) {
            setAccountData(data[0]);
            setShowAccount(true);
          }
        })
        .catch((err) => console.error("Failed to load accounts", err));
    }
  }, []);

  const handleSaveAccount = (data) => {
    setAccountData(data);
    setShowAccount(true);
  };

  const handleWithdraw = async () => {
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    if (!accountData) {
      alert("Please add and select an account.");
      return;
    }

    const payload = {
      user: { id: userId },
      amount: amount,
      accountType: accountData.accountType,
      accountNumber: accountData.accountNumber,
      ifscCode: accountData.ifsc || "",
      upiId: accountData.upiId || "",
      password: withdrawalPassword,
    };

    try {
      const response = await fetch("http://localhost:8080/api/withdrawals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.text();
      if (response.ok) {
        alert(result);
        setAmount("");
        setWithdrawalPassword("");
      } else {
        alert("Failed: " + result);
      }
    } catch (err) {
      alert("Error occurred: " + err.message);
    }
  };

  return (
    <div className="withdraw-container">
      <div className="top-bar">
        <button
          className="add-account-btn"
          onClick={() => setShowAddForm(true)}
        >
          ➕ ADD ACCOUNT
        </button>
      </div>

      <ul className="withdraw-rules">
        <li>
          This form is for withdrawing the amount from the main wallet only.
        </li>
        <li>The bonus wallet amount cannot be withdrawn by this form.</li>
        <li className="highlight">
          Do not put Withdrawal request without betting with deposit amount.
          Such activity may be identified as Suspicious.
        </li>
        <li>
          If multiple users are using the same withdraw account, all the linked
          users will be blocked.
        </li>
        <li>
          Maximum Withdraw time is 4–5 minutes. Only then complain on WhatsApp
          number.
        </li>
      </ul>

      <a
        href={`https://wa.me/919767713493?text=${encodeURIComponent(
          "Hi, I have a withdrawal password issue on Crickbet365. Please assist."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-strip"
      >
        <FaWhatsapp size={20} style={{ marginRight: "8px" }} />
        <span>FOR WITHDRAW PASSWORD RELATED ISSUES CLICK HERE</span>
      </a>

      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <AddAccount
              onClose={() => setShowAddForm(false)}
              onSave={handleSaveAccount}
            />
          </div>
        </div>
      )}

      {showAccount && accountData && (
        <div className="account-box">
          <div className="account-header">
            <h3>{accountData.name}</h3>
            <FaTrash
              className="delete-icon"
              onClick={() => {
                setShowAccount(false);
                setAccountData(null);
              }}
            />
          </div>

          <div className="account-info">
            <p>
              Account No : <span>{accountData.accountNumber}</span>
              <FaCopy className="copy-icon" />
            </p>
            {accountData.ifsc && (
              <p>
                IFSC Code : <span>{accountData.ifsc}</span>
                <FaCopy className="copy-icon" />
              </p>
            )}
            {accountData.upiId && (
              <p>
                UPI ID : <span>{accountData.upiId}</span>
                <FaCopy className="copy-icon" />
              </p>
            )}
          </div>

          <input
            type="number"
            placeholder="Enter amount"
            className="amount-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="password"
            placeholder="Withdrawal Password"
            className="amount-input"
            value={withdrawalPassword}
            onChange={(e) => setWithdrawalPassword(e.target.value)}
          />
          <button className="withdraw-btn" onClick={handleWithdraw}>
            WITHDRAW
          </button>
        </div>
      )}
    </div>
  );
};

export default WithdrawForm;
