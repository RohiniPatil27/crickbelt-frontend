import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [balance, setBalance] = useState(0);
  const [hideBalance, setHideBalance] = useState(false);
  const [hideExposer, setHideExposer] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    fetch(`http://localhost:8080/api/account/balance/${userId}`)
      .then((res) => res.json())
      .then((data) => setBalance(data))
      .catch((err) => console.error("Error fetching balance:", err));
  }, []);

  return (
    <header
      className="crickbet-header py-2"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container-fluid d-flex flex-wrap align-items-center">
        {/* Logo - Left Side */}
        <div className="crickbet-logo">
          <Link
            to="/home"
            className="text-white text-decoration-none d-flex align-items-center"
            style={{ gap: "5px" }}
          >
            <span
              style={{ borderLeft: "5px solid #f5d142", paddingLeft: "10px" }}
            >
              Crickbet
            </span>
            <span className="text-yellow">365</span>
          </Link>
        </div>

        {/* Right Side Items */}
        <div className="ms-auto d-flex align-items-center flex-wrap gap-2 justify-content-end">
          {/* Deposit & Withdraw */}
          <Link to="/deposit" className="btn btn-success btn-sm">
            Deposit
          </Link>
          <Link to="/withdraw-statement" className="btn btn-danger btn-sm">
            Withdraw
          </Link>

          {/* Search Icon */}
          <i
            className="bi bi-search text-white fs-5"
            style={{ cursor: "pointer" }}
          ></i>

          {/* Rules Link */}
          <Link to="/rule" className="text-white text-decoration-none small">
            Rules
          </Link>

          {/* Balance Info */}
          <div className="text-white text-end small text-nowrap">
            {!hideBalance && <strong>Balance:</strong>}{" "}
            {!hideBalance && balance.toFixed(2)}
            <br />
            {!hideExposer && <small>Exp : 0</small>}
          </div>

          {/* User Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-outline-light dropdown-toggle btn-sm"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {localStorage.getItem("username") || "Demo365"}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/account-statement">
                  Account Statement
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/deposit-history">
                  Deposit History
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/withdraw-history">
                  Withdraw History
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profit">
                  Profit Loss Report
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/bet">
                  Bet History
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/unsettle">
                  Unsettled Bet
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/button">
                  Set Button Values
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/security">
                  Security Auth Verification
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/change-password">
                  Change Password
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              {/* Toggles */}
              <li className="px-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="balanceCheck"
                    checked={hideBalance}
                    onChange={() => setHideBalance(!hideBalance)}
                  />
                  <label
                    className="form-check-label small"
                    htmlFor="balanceCheck"
                  >
                    Balance
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="exposerCheck"
                    checked={hideExposer}
                    onChange={() => setHideExposer(!hideExposer)}
                  />
                  <label
                    className="form-check-label small"
                    htmlFor="exposerCheck"
                  >
                    Exposer
                  </label>
                </div>
              </li>

              <li>
                <Link className="dropdown-item" to="/rule">
                  Rules
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-danger" to="/login">
                  SIGNOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
