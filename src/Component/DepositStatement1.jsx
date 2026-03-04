// src/Component/BankDeposit.jsx
import React, { useEffect, useState } from "react";
import "../Css/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import Usdt from "./USDT";

const BankDeposit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get amount from route state or fallback to localStorage
  const routeAmount =
    location.state?.amount || localStorage.getItem("depositAmount") || "";
  const [amount] = useState(routeAmount);
  const [utr, setUtr] = useState("");
  const [file, setFile] = useState(null);
  const [agree, setAgree] = useState(false);
  const [activeTab, setActiveTab] = useState("account");

  useEffect(() => {
    // Save to localStorage to preserve on page refresh
    if (routeAmount) {
      localStorage.setItem("depositAmount", routeAmount);
    }
  }, [routeAmount]);

  const handleSubmit = async () => {
    if (!utr.trim()) return alert("Please enter UTR number.");
    if (!file) return alert("Please upload your payment proof.");
    if (!agree) return alert("You must agree to the terms and conditions.");

    const userId = localStorage.getItem("userId"); // ✅ Store on login
    if (!userId) return alert("User not logged in");

    const formData = new FormData();
    formData.append("utr", utr);
    formData.append("amount", amount);
    formData.append("file", file);
    formData.append("userId", userId);

    try {
      const response = await fetch(
        "http://localhost:8080/api/deposits/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Deposit submitted successfully!");
        navigate("/dashboard");
      } else {
        const text = await response.text();
        alert("Error: " + text);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting deposit.");
    }
  };

  return (
    <div className="deposit-container">
      <button className="back-btn" onClick={() => navigate("/deposit")}>
        ← BACK
      </button>

      {/* Tab Navigation */}
      <div className="tabs">
        <button
          className={`tab whatsapp ${activeTab === "whatsapp" ? "active" : ""}`}
          onClick={() => setActiveTab("whatsapp")}
        >
          WHATSAPP DEPOSIT
        </button>
        <button
          className={`tab ${activeTab === "account" ? "active" : ""}`}
          onClick={() => setActiveTab("account")}
        >
          ACCOUNT
        </button>
        <button
          className={`tab usdt ${activeTab === "usdt" ? "active" : ""}`}
          onClick={() => setActiveTab("usdt")}
        >
          USDT
        </button>
      </div>

      {/* Account Tab */}
      {activeTab === "account" && (
        <div className="bank-section">
          <h3>BANK ACCOUNT</h3>
          <div className="form-wrapper">
            {/* Left Box */}
            <div className="left-box">
              <p>
                <strong>Bank Name :</strong> INDIAN OVERSEAS BANK
              </p>
              <p>
                <strong>A/C No :</strong> 264301000011104
              </p>
              <p>
                <strong>IFSC Code :</strong> IOBA0002643
              </p>
              <p>
                <strong>Account Name :</strong> ASHIK LIME
              </p>
              <p>
                <strong>Min Amount :</strong> 300
              </p>
              <p>
                <strong>Max Amount :</strong> 100000
              </p>

              <div className="howto-box">
                <p>
                  <strong>HOW TO TRANSFER UPI TO BANK</strong>
                </p>
                <a
                  href="https://www.upitobank.info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CLICK HERE WWW.UPITOBANK.INFO
                </a>
              </div>

              <a
                href="https://wa.me/919619405729?text=Hi%20I%20have%20a%20payment%20issue%20on%20Crickbet365"
                target="_blank"
                rel="noopener noreferrer"
                className="support-btn"
              >
                FOR PAYMENT RELATED ISSUES CLICK HERE
              </a>
            </div>

            {/* Right Box */}
            <div className="right-box">
              <label>Unique Transaction Reference *</label>
              <input
                type="text"
                placeholder="6 to 12 Digit UTR Number"
                value={utr}
                onChange={(e) => setUtr(e.target.value)}
              />

              <label>
                Upload Your Payment Proof{" "}
                <span className="required">(Required)</span>
              </label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />

              <label>Amount *</label>
              <input type="text" value={amount} readOnly />

              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                <label>
                  I agree with the{" "}
                  <button
                    type="button"
                    className="link-button"
                    onClick={() => alert("Show terms and conditions")}
                  >
                    terms of payment
                  </button>
                </label>
              </div>

              <button className="submit-btn" onClick={handleSubmit}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Tab */}
      {activeTab === "whatsapp" && (
        <div className="whatsapp-section">
          <h3>WhatsApp Deposit</h3>
          <p>Click below to chat with deposit team:</p>
          <a
            href="https://wa.me/919619405729?text=Hi%20I%20want%20to%20deposit%20on%20Crickbet365"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 Open WhatsApp
          </a>
        </div>
      )}

      {/* USDT Tab */}
      {activeTab === "usdt" && <Usdt />}

      {/* Red Instructions */}
      <div className="red-instructions">
        <p>
          1. Deposit money only in the below available accounts to get the
          fastest credits and avoid possible delays.
        </p>
        <p>
          2. Deposits made 45 minutes after the account removal from the site
          are valid & will be added to the wallet balance.
        </p>
        <p>
          3. Site is not responsible for money deposited to Old, Inactive or
          Closed accounts.
        </p>
        <p>4. After deposit, save your UTR and amount to receive balance.</p>
        <p>5. NEFT receiving time varies from 40 minutes to 2 hours.</p>
        <p>
          6. In case of account modification: payment valid for 1 hour after
          changing account details in deposit page.
        </p>
      </div>
    </div>
  );
};

export default BankDeposit;
