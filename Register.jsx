// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import countryCodes from "../country-codes.json";

// const Register = () => {
//   const [countryCode, setCountryCode] = useState("+91");
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const navigate = useNavigate();

//   const fullPhone = countryCode + phone;

//   const handleSendOtp = async () => {
//     if (!/^[0-9]{5,15}$/.test(phone)) {
//       alert("Please enter a valid phone number");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/api/otp/send-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phone: fullPhone }),
//       });

//       if (response.ok) {
//         alert(`OTP sent to ${fullPhone}`);
//         setOtpSent(true);
//       } else {
//         const msg = await response.text();
//         alert("Failed to send OTP: " + msg);
//       }
//     } catch (error) {
//       alert("Error sending OTP: " + error.message);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     if (!otp || otp.length !== 6) {
//       alert("Enter a valid 6-digit OTP");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/api/otp/verify-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phone: fullPhone, otp }),
//       });

//       if (response.ok) {
//         alert("OTP verified successfully!");
//         setOtpVerified(true);
//       } else {
//         const msg = await response.text();
//         alert("OTP verification failed: " + msg);
//       }
//     } catch (error) {
//       alert("Error verifying OTP: " + error.message);
//     }
//   };

//   const handleRegister = async () => {
//     if (!otpVerified) {
//       alert("Please verify OTP first");
//       return;
//     }

//     if (!password || password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/api/users/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ phone: fullPhone, password }),
//       });

//       if (response.ok) {
//         alert("Registration successful");
//         navigate("/login");
//       } else {
//         const msg = await response.text();
//         alert("Registration failed: " + msg);
//       }
//     } catch (error) {
//       alert("Error registering: " + error.message);
//     }
//   };

//   return (
//     <div className="bg-black text-black p-4 min-h-screen flex items-center justify-center flex-col">
//       <div className="text-center mb-6 text-3xl font-bold">
//         <span className="border-l-4 border-yellow-400 pl-2 text-white">
//           Crickbet
//         </span>
//         <span className="text-yellow-400 ml-1">365</span>
//       </div>

//       <div className="bg-white text-yellow-400 w-full max-w-md p-6 rounded-lg shadow-lg text-center">
//         <h2 className="text-xl font-bold mb-4 text-[#ffce00] uppercase">
//           Signup
//         </h2>

//         <div className="flex mb-3 w-full">
//           <select
//             value={countryCode}
//             onChange={(e) => setCountryCode(e.target.value)}
//             className="border border-black px-2 rounded-l bg-white text-black w-[40%]"
//             disabled={otpSent}
//           >
//             {countryCodes.map((country) => (
//               <option key={country.code} value={country.dial_code}>
//                 {country.emoji} {country.name} ({country.dial_code})
//               </option>
//             ))}
//           </select>

//           <input
//             type="tel"
//             placeholder="Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
//             className="border border-black px-2 bg-white text-black w-full"
//             disabled={otpSent}
//             maxLength="15"
//           />

//           <button
//             onClick={handleSendOtp}
//             className="bg-yellow-400 text-black px-4 rounded-r"
//             disabled={otpSent}
//           >
//             SEND OTP
//           </button>
//         </div>

//         {otpSent && (
//           <>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               maxLength="6"
//               className="w-full mb-3 p-2 border border-black rounded"
//             />
//             <button
//               className="w-full bg-yellow-400 text-black font-bold py-2 rounded mb-3"
//               onClick={handleVerifyOtp}
//             >
//               Verify OTP
//             </button>
//           </>
//         )}

//         {otpVerified && (
//           <>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full mb-3 p-2 border border-black rounded"
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               className="w-full mb-4 p-2 border border-black rounded"
//             />
//             <button
//               className="w-full bg-yellow-400 text-black font-bold py-2 rounded"
//               onClick={handleRegister}
//             >
//               Register
//             </button>
//           </>
//         )}

//         <p className="mt-3 text-sm text-black">
//           Already have an account?{" "}
//           <button
//             onClick={() => navigate("/login")}
//             className="underline text-yellow-400"
//           >
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import countryCodes from "../country-codes.json";

const Register = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  const fullPhone = countryCode + phone;

  const handleSendOtp = async () => {
    if (!/^[0-9]{5,15}$/.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    try {
      // Still send OTP to backend (optional - or comment this out)
      const response = await fetch("http://localhost:8080/api/otp/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone }),
      });

      if (response.ok) {
        alert(`OTP request sent for ${fullPhone}`);
        setOtpSent(true);

        // Open chat with owner instead of sending OTP to user
        const ownerPhoneNumber = "9767713493"; // Replace with actual owner's number
        const registrationMessage = `Hi, I want to register. My phone no is ${fullPhone}. Please send me OTP.`;
        const encodedMsg = encodeURIComponent(registrationMessage);
        window.open(
          `https://wa.me/${ownerPhoneNumber}?text=${encodedMsg}`,
          "_blank"
        );
      } else {
        const msg = await response.text();
        alert("Failed to send OTP: " + msg);
      }
    } catch (error) {
      alert("Error sending OTP: " + error.message);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      alert("Enter a valid 6-digit OTP");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone, otp }),
      });

      if (response.ok) {
        alert("OTP verified successfully!");
        setOtpVerified(true);
      } else {
        const msg = await response.text();
        alert("OTP verification failed: " + msg);
      }
    } catch (error) {
      alert("Error verifying OTP: " + error.message);
    }
  };

  const handleRegister = async () => {
    if (!otpVerified) {
      alert("Please verify OTP first");
      return;
    }

    if (!password || password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone, password }),
      });

      if (response.ok) {
        alert("Registration successful");
        navigate("/login");
      } else {
        const msg = await response.text();
        alert("Registration failed: " + msg);
      }
    } catch (error) {
      alert("Error registering: " + error.message);
    }
  };

  return (
    <div className="bg-black text-black p-4 min-h-screen flex items-center justify-center flex-col">
      <div className="text-center mb-6 text-3xl font-bold">
        <span className="border-l-4 border-yellow-400 pl-2 text-white">
          Crickbet
        </span>
        <span className="text-yellow-400 ml-1">365</span>
      </div>

      <div className="bg-white text-yellow-400 w-full max-w-md p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4 text-[#ffce00] uppercase">
          Signup
        </h2>

        <div className="flex mb-3 w-full">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="border border-black px-2 rounded-l bg-white text-black w-[40%]"
            disabled={otpSent}
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.dial_code}>
                {country.emoji} {country.name} ({country.dial_code})
              </option>
            ))}
          </select>

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            className="border border-black px-2 bg-white text-black w-full"
            disabled={otpSent}
            maxLength="15"
          />

          <button
            onClick={handleSendOtp}
            className="bg-yellow-400 text-black px-4 rounded-r"
            disabled={otpSent}
          >
            SEND OTP
          </button>
        </div>

        {otpSent && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              className="w-full mb-3 p-2 border border-black rounded"
            />
            <button
              className="w-full bg-yellow-400 text-black font-bold py-2 rounded mb-3"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </>
        )}

        {otpVerified && (
          <>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-3 p-2 border border-black rounded"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mb-4 p-2 border border-black rounded"
            />
            <button
              className="w-full bg-yellow-400 text-black font-bold py-2 rounded"
              onClick={handleRegister}
            >
              Register
            </button>
          </>
        )}

        <p className="mt-3 text-sm text-black">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="underline text-yellow-400"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
