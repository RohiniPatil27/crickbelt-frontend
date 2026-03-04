import React from 'react';

// import all components
import Header from '../Component/Header';
import Nav from '../Component/Nav';
import Sidebar from '../Component/Sidebar';
import Casino1 from '../Component/Casino1'; // 👈 Main content of Home
import Footer from '../Component/Footer';

// Import styles
import '../Css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
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
      <Casino1 />
    </div>
  </div>
</div>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
