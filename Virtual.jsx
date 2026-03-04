// Pages/VirtualPage.jsx
import React from "react";
import Header from "../Component/Header";
import Nav from "../Component/Nav";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";
import VirtualContent from "../Component/VirtualContent";

import "../Css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const VirtualPage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
         <div className="col-md-10 p-3" style={{ marginTop: "-30px" }}>
  <VirtualContent />
</div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VirtualPage;
