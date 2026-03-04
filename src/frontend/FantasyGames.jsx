import React from 'react';

// Import all components
import Header from '../Component/Header';
import Nav from '../Component/Nav';
import Sidebar from '../Component/Sidebar';
import Fantasy from '../Component/Fantasy'; // 👈 Import Fantasy component
import Footer from '../Component/Footer';

// Import styles
import '../Css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FantasyGames = () => {
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

          {/* Fantasy is shown as main content of Home */}
          <div className="col-md-9 col-lg-10 p-3" style={{ marginTop: "-10px" }}>
  <Fantasy />
</div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FantasyGames;
