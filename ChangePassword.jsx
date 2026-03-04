import React from 'react';
import Header from '../Component/Header';
import Nav from '../Component/Nav';
import Sidebar from '../Component/Sidebar';
import ChangePassword from '../Component/ChangePassword';
import Footer from '../Component/Footer';

const ChangePassword1 = () => {
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
            <ChangePassword />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword1;
