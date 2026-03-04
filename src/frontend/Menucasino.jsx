import React from 'react';

// Import all components
import Header from '../Component/Header';
import Nav from '../Component/Nav';
import Sidebar from '../Component/Sidebar';
import Casino2 from '../Component/Casino2'; // 👈 Main content of Home
import Footer from '../Component/Footer';

// Import styles
import '../Css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Menucasino = () => {
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
<div className="col-md-9 col-lg-10 pt-2 pb-3 px-3">
  <Casino2 />
</div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Menucasino;
