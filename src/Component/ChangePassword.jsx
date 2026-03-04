import React, { useState } from "react";
import "../Css/style.css"; // Ensure you have the correct path to your CSS file

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [popup, setPopup] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });

    // Automatically hide popup after 3 seconds
    setTimeout(() => {
      setPopup({ show: false, type: "", message: "" });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      showPopup("error", "(!) New password and confirm password do not match.");
    } else if (formData.currentPassword !== "admin123") {
      showPopup("error", "(!) Current password is not matched.");
    } else {
      showPopup("success", "✅ Password updated successfully!");
    }
  };

  return (
    <div className="change-password-container">
      <h2 className="heading">CHANGE PASSWORD</h2>

      {popup.show && (
        <div className={`popup ${popup.type}`}>{popup.message}</div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <label>Current Password</label>
        <input
          type="password"
          name="currentPassword"
          onChange={handleChange}
          value={formData.currentPassword}
          required
        />

        <label>New Password</label>
        <input
          type="password"
          name="newPassword"
          onChange={handleChange}
          value={formData.newPassword}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={formData.confirmPassword}
          required
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ChangePassword;
