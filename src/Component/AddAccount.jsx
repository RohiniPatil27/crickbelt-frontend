import React, { useState } from "react";

const AddAccount = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    accountType: "",
    name: "",
    accountNumber: "",
    ifsc: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async () => {
    const newErrors = {};

    if (
      !formData.accountType ||
      formData.accountType === "---Select Account Type---"
    ) {
      newErrors.accountType = "PLEASE SELECT ACCOUNT TYPE";
    }
    if (!formData.name.trim())
      newErrors.name = "PLEASE ENTER YOUR ACCOUNT NAME";
    if (!formData.accountNumber.trim())
      newErrors.accountNumber = "PLEASE ENTER YOUR ACCOUNT NUMBER";
    if (!formData.ifsc.trim()) newErrors.ifsc = "PLEASE ENTER IFSC CODE";
    if (!formData.password.trim()) newErrors.password = "PLEASE ENTER PASSWORD";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User not logged in.");
      return;
    }

    try {
      // ✅ First verify the password
      const verifyRes = await fetch(
        "http://localhost:8080/api/users/verify-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: userId, password: formData.password }),
        }
      );

      if (!verifyRes.ok) {
        alert("Incorrect password");
        return;
      }

      // ✅ Save account to backend
      const payload = {
        user: { id: userId },
        accountType: formData.accountType,
        name: formData.name,
        accountNumber: formData.accountNumber,
        ifscCode: formData.ifsc,
        password: formData.password,
        amount: 0,
      };

      const saveRes = await fetch(
        "http://localhost:8080/api/withdrawals/accounts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (saveRes.ok) {
        alert("Account saved successfully.");
        onSave(payload); // pass account to parent
        onClose();
      } else {
        const error = await saveRes.text();
        alert("Error saving account: " + error);
      }
    } catch (err) {
      alert("Something went wrong: " + err.message);
    }
  };

  return (
    <div>
      <div className="modal-header">
        <h3>Add Account</h3>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="modal-body">
        <label>ACCOUNT TYPE</label>
        <select
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
        >
          <option>---Select Account Type---</option>
          <option>Bank</option>
          <option>UPI</option>
        </select>
        {errors.accountType && <p className="error">{errors.accountType}</p>}

        <label>NAME</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>A/C NUMBER</label>
        <input
          type="text"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleChange}
        />
        {errors.accountNumber && (
          <p className="error">{errors.accountNumber}</p>
        )}

        <label>IFSC CODE</label>
        <input
          type="text"
          name="ifsc"
          value={formData.ifsc}
          onChange={handleChange}
        />
        {errors.ifsc && <p className="error">{errors.ifsc}</p>}

        <label>WITHDRAW PASSWORD</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div className="modal-footer">
        <button className="close" onClick={onClose}>
          Close
        </button>
        <button className="save" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddAccount;
