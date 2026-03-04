// File: src/components/ButtonValueEditor.jsx
import React, { useState } from "react";
import "../Css/style.css";
const ButtonValueEditor = () => {
  const initialValues = [
    { label: "1000", value: "1000" },
    { label: "2000", value: "2000" },
    { label: "5000", value: "5000" },
    { label: "10000", value: "10000" },
    { label: "20000", value: "20000" },
    { label: "25000", value: "25000" },
    { label: "50000", value: "50000" },
    { label: "100000", value: "100000" },
    { label: "", value: "" },
    { label: "", value: "" },
  ];

  const [buttons, setButtons] = useState(initialValues);

  const handleChange = (index, field, newValue) => {
    const updated = [...buttons];
    updated[index][field] = newValue;
    setButtons(updated);
  };

  const handleUpdate = () => {
    console.log("Updated Values:", buttons);
    alert("Button values updated successfully!");
    // Add backend update logic here if needed
  };

  return (
    <div className="editor-container">
      <div className="editor-header">CHANGE BUTTON VALUES</div>

      <div className="label-row">
        <div>Price Label</div>
        <div>Price Value</div>
      </div>

      {buttons.map((btn, index) => (
        <div key={index} className="input-row">
          <input
            type="text"
            value={btn.label}
            placeholder="Button Name"
            onChange={(e) => handleChange(index, "label", e.target.value)}
          />
          <input
            type="text"
            value={btn.value}
            placeholder="Button Value"
            onChange={(e) => handleChange(index, "value", e.target.value)}
          />
        </div>
      ))}

      <button onClick={handleUpdate} className="update-button">
        Update
      </button>
    </div>
  );
};

export default ButtonValueEditor;
