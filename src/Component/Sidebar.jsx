import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [racingOpen, setRacingOpen] = useState(true);
  const [othersOpen, setOthersOpen] = useState(true);
  const [sportsOpen, setSportsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false); // new state for toggle

  return (
    <>
      {/* Toggle button visible only on mobile */}
      <button
        className="d-block d-lg-none btn btn-warning m-2"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰ MENU
      </button>

      <aside
        className={`sidebar ${mobileOpen ? 'd-block' : 'd-none'} d-lg-block`}
      >
        {/* Racing Block */}
        <div className="sidebar-block">
          <div
            className="sidebar-title"
            onClick={() => setRacingOpen(!racingOpen)}
            style={{ cursor: 'pointer' }}
          >
            Racing
          </div>
          {racingOpen && (
            <ul className="sidebar-links">
              <li><Link to="/home">Horse Race</Link></li>
              <li><Link to="/home">Greyhound</Link></li>
            </ul>
          )}
        </div>

        {/* Others Block */}
        <div className="sidebar-block">
          <div
            className="sidebar-title"
            onClick={() => setOthersOpen(!othersOpen)}
            style={{ cursor: 'pointer' }}
          >
            Others
          </div>
          {othersOpen && (
            <ul className="sidebar-links">
              <li className="blink"><Link to="/menucasino">Our Casino</Link></li>
              <li className="blink"><Link to="/virtual">Our Virtual</Link></li>
              <li><Link to="/icasino">Live Casino</Link></li>
              <li><Link to="/slot-game">Slot Game</Link></li>
              <li><Link to="/fantasy-game">Fantasy Game</Link></li>
            </ul>
          )}
        </div>

        {/* Sports Block */}
        <div className="sidebar-block">
          <div
            className="sidebar-title"
            onClick={() => setSportsOpen(!sportsOpen)}
            style={{ cursor: 'pointer' }}
          >
            Sports
          </div>
          {sportsOpen && (
            <ul className="sidebar-links">
              <li><Link to="/cricket">Cricket</Link></li>
              <li><Link to="/tennis">Tennis</Link></li>
              <li><Link to="/soccer">Soccer</Link></li>
              <li><Link to="/horse">Horse Race</Link></li>
              <li><Link to="/greyhound">Greyhound</Link></li>
              <li><Link to="/politics">Politics</Link></li>
            </ul>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
