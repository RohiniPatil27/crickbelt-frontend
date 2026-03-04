import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import WithdrawForm from "../Component/WithdrawStatement";
import Footer from "../Component/Footer";

const WithdrawStatement1 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginType = localStorage.getItem("loginType");
    const userData = localStorage.getItem("user");

    if (!isLoggedIn || loginType === "demo") {
      navigate("/login");
    }

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

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
            <WithdrawForm user={user} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WithdrawStatement1;
