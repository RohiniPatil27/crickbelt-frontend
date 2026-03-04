import React, { useState } from "react";
import "../Css/style.css";

function Usdt() {
  const [utr, setUtr] = useState("");
  const [file, setFile] = useState(null);
  const [agree, setAgree] = useState(false);

  return (
    <div className="usdt-container">
      <h2>USDT</h2>
      <div className="usdt-card">
        <div className="wallet-info">
          <p>
            <strong>Wallet Name:</strong> TRC20
          </p>
          <p>
            <strong>Wallet address:</strong> TReAdiSpPhK4T43jkrYCiv2nb2cDbKq
          </p>

          <div className="qr-box">
            <img src="/qr.png" alt="QR Code" />
          </div>

          <button className="how-transfer-btn">
            HOW TO TRANSFER UPI TO BANK
            <br />
            <a
              href="http://www.upitobank.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLICK HERE WWW.UPITOBANK.INFO
            </a>
          </button>

          {/* WhatsApp support link */}
          <a
            href="https://wa.me/919619405729?text=Hi%20I%20have%20a%20payment%20issue%20on%20Crickbet365"
            target="_blank"
            rel="noopener noreferrer"
            className="issues-btn"
          >
            FOR PAYMENT RELATED ISSUES CLICK HERE
          </a>
        </div>

        <div className="form-section">
          <label>USDT Reference No *</label>
          <input
            type="text"
            placeholder="10 Digit USDT Reference No"
            value={utr}
            onChange={(e) => setUtr(e.target.value)}
          />

          <label>
            Upload Your Payment Proof <span className="required">*</span>
          </label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <label>Amount *</label>
          <input type="text" value="3.2609" readOnly />
          <p className="rate-note">Rate calculation : 3.2609 x 92 = 300</p>

          <div className="checkbox-wrap">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <span>
              I have read and agree with the{" "}
              <a href="#">terms of payment and withdrawal policy</a>.
            </span>
          </div>

          <button className="submit-btn">SUBMIT</button>
        </div>
      </div>

      <div className="note-box">
        <ol>
          <li>Deposit money only in the below available accounts...</li>
          <li>Deposits made 45 minutes after...</li>
          <li>Site is not responsible for money...</li>
          <li>After deposit, add your UTR...</li>
          <li>NEFT receiving time varies...</li>
          <li>In case of account modification...</li>
        </ol>
      </div>
    </div>
  );
}

export default Usdt;
