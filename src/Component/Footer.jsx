import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      {/* Top Footer */}
      <div className="footer-top bg-purple text-white py-2 px-3 d-flex justify-content-between align-items-center flex-wrap">
        {/* Left: Links */}
        <div className="order-1">
          <Link to="/term" className="text-white me-4">Terms and Conditions</Link>
          <Link to="/term" className="text-white">Responsible Gaming</Link>
        </div>

        {/* Right: 24x7 Support aligned to right */}
        <div className="ms-auto fw-bold text-white order-2 my-2 my-md-0">
          24X7 Support
        </div>
      </div>

      {/* Middle Footer */}
      <div className="footer-middle px-4 py-3">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          {/* Left: 100% Safe Block */}
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <img src="/img/ssl (1).png" alt="SSL" className="me-3 footer-icon" />
            <div>
              <strong>100% SAFE</strong><br />
              <span className="text-muted small">Protected connection and encrypted data.</span>
            </div>
          </div>

          {/* Right: Icons */}
          <div className="d-flex gap-2 justify-content-end">
            <a href="https://www.google.com/search?q=18%2B+responsible+gaming" target="_blank" rel="noreferrer">
              <img src="/img/18plus.png" alt="18+" className="footer-icon" />
            </a>
            <a href="https://www.ssl.com/" target="_blank" rel="noreferrer">
              <img src="/img/lock.jpg" alt="Secure" className="footer-icon" />
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
              <img src="/img/whatsapp.jpg" alt="WhatsApp" className="footer-icon" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center small text-muted mt-3">
          © Copyright 2024. All Rights Reserved. Powered by Crickbet365
        </div>
      </div>
    </footer>
  );
};

export default Footer;
