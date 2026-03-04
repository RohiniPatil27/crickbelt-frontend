import React from "react";

// import all components
import Header from "../Component/Header";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import DepositStatement3 from "../Component/DepositStatement1";
import Footer from "../Component/Footer";

// Import styles
import "../Css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const DepositStatement2 = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Nav />

      {/* Sidebar + Main Content Layout */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 px-2">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10">
            <DepositStatement3 />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DepositStatement2;
