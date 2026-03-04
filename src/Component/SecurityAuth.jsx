import React, { useState } from "react";
import "../Css/style.css";

const SecureAuth = () => {
  const [enabled, setEnabled] = useState(false);
  const [showTelegramSection, setShowTelegramSection] = useState(false);
  const [password, setPassword] = useState("");

  const handleEnableMobile = () => {
    setEnabled(true);
    setShowTelegramSection(false);
  };

  const handleEnableTelegram = () => {
    setEnabled(false);
    setShowTelegramSection(true);
  };

  const handleGetConnectionId = () => {
    alert("(!) Your account is deactivated by parent");
  };

  return (
    <div className="secure-auth-container">
      <h2 className="header">SECURE AUTH VERIFICATION</h2>

      <div className="status-row">
        <span className="status-label">Secure Auth Verification Status:</span>
        <span className="status-disabled">DISABLED</span>
      </div>

      <p className="instruction">
        Please select below option to enable secure auth verification
      </p>

      <div className="button-group">
        <button className="btn btn-outline-green" onClick={handleEnableMobile}>
          Enable Using Mobile App
        </button>
        <button className="btn btn-green" onClick={handleEnableTelegram}>
          Enable Using Telegram
        </button>
      </div>

      {/* Mobile App section */}
      {enabled && (
        <>
          <p className="instruction">
            Please enter below auth code in your Secure Auth Verification App.
          </p>
          <div className="auth-code-box">990776</div>

          <p className="download-text">
            If you haven't downloaded,
            <br />
            please download Secure Auth Verification App <br />
            from below link.
          </p>

          <p className="instruction small-text">
            Using this app you will receive auth code during login authentication
          </p>

          <button className="download-button">
            <i className="android-icon fab fa-android"></i> DOWNLOAD
            <br />
            on the android
          </button>
        </>
      )}

      {/* Telegram section */}
      {showTelegramSection && (
        <>
          <p className="instruction">
            Please enter your login password to continue
          </p>
          <div className="telegram-box">
            <input
              type="password"
              className="telegram-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-black" onClick={handleGetConnectionId}>
              Get Connection Id
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SecureAuth;
