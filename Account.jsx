import React from "react";
import Header from "../Component/Header";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import AccountStatement from "../Component/AccountStatement";
import Footer from "../Component/Footer";

const Account = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 px-0">
            <Sidebar />
          </div>
          <div className="col-md-9 col-lg-10">
            <AccountStatement />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
