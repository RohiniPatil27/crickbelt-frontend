import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Component/Header";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import Deposit from "../Component/DepositStatement";
import Footer from "../Component/Footer";

const Deposit1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginType = localStorage.getItem("loginType");

    // Redirect only if not logged in or demo user
    if (!isLoggedIn || loginType === "demo") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Nav />

      {/* Main Layout */}
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 p-0 bg-light min-vh-100 border-end">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 p-3">
            <Deposit />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Deposit1;
