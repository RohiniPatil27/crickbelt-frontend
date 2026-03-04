import React from 'react';
import Header from '../Component/Header';
import Nav from '../Component/Nav';
import Sidebar from '../Component/Sidebar';
import ButtonValueEditor1 from '../Component/ButtonValued';
import Footer from '../Component/Footer';

const ButtonValueEditor = () => {
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
            <ButtonValueEditor1 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ButtonValueEditor;
