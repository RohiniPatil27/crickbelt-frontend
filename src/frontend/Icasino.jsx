import React from 'react';

// Import all components
import Header from '../Component/Header';
import Nav from '../Component/Nav';
import Sidebar from '../Component/Sidebar';
import Icasino from '../Component/Icasino'; // 👈 Main content of Home
import Footer from '../Component/Footer';

// Import styles
import '../Css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Icasino1 = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Nav />

      {/* Sidebar + Main Content Layout */}
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 p-0">
            <Sidebar />
          </div>

          {/* Casino1 is shown as main content of Home */}
          <div className="col-md-9 col-lg-10 p-2">
            <Icasino />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Icasino1;
