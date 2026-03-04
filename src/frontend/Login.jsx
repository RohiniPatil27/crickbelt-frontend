import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Real login handler (must be async)
  const handleLogin = async () => {
    if (!phone || !password) {
      alert("Please enter phone number and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("phone", data.phone); // save phone for use
        localStorage.setItem("loginType", "user");
        localStorage.setItem("userId", data.id); // ✅ required for deposit

        alert("Login successful!");
        navigate("/home");
      } else {
        const msg = await response.text();
        alert("Login failed: " + msg);
      }
    } catch (error) {
      alert("Network error: " + error.message);
    }
  };

  // ✅ Demo login handler
  const handleDemoLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("phone", "demo");
    localStorage.setItem("loginType", "demo");
    navigate("/home");
  };

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center p-4 bg-black">
      <div className="text-center mb-6 text-3xl font-bold">
        <span className="border-l-4 border-yellow-400 pl-2 text-white">
          Crickbet
        </span>
        <span className="text-yellow-400 ml-1">365</span>
      </div>

      <div className="bg-white text-black w-full max-w-sm p-6 rounded-lg shadow-lg">
        <h2 className="text-center text-xl font-bold mb-4 uppercase text-[#ffce00]">
          LOGIN
        </h2>

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full mb-3 p-2 border border-black rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-black rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-black text-[#ffce00] py-2 rounded mb-2 font-semibold hover:bg-gray-900"
          onClick={handleLogin}
        >
          Login
        </button>

        <button
          className="w-full bg-black text-[#ffce00] py-2 rounded mb-3 font-semibold hover:bg-gray-900"
          onClick={handleDemoLogin}
        >
          Login with Demo ID
        </button>

        <button
          className="w-full bg-[#ffce00] text-black py-2 rounded font-semibold hover:bg-yellow-400"
          onClick={handleSignup}
        >
          SIGN UP
        </button>

        <p className="text-[10px] text-center text-gray-600 mt-4">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            className="underline text-blue-600 mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            className="underline text-blue-600 mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>

      <footer className="fixed bottom-0 left-0 w-full bg-black text-cyan-300 text-sm py-2 px-4 flex justify-between">
        <div>
          <a href="/terms" className="mr-4 underline hover:text-cyan-100">
            Terms and Conditions
          </a>
          <a href="/responsible" className="underline hover:text-cyan-100">
            Responsible Gaming
          </a>
        </div>
        <div className="font-semibold">24X7 Support</div>
      </footer>
    </div>
  );
};

export default Login;
