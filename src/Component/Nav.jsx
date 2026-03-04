import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <section className="main-nav-section bg-dark py-2">
      <nav className="main-nav w-100">
        <div className="container-fluid">
          <ul className="nav flex-nowrap overflow-auto gap-2 px-2">
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 py-2 ${isActive('/home') ? 'active bg-warning text-dark rounded' : ''}`} to="/home">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 py-2 ${isActive('/cricket') ? 'active bg-warning text-dark rounded' : ''}`} to="/cricket">CRICKET</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 py-2 ${isActive('/tennis') ? 'active bg-warning text-dark rounded' : ''}`} to="/tennis">TENNIS</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 py-2 ${isActive('/soccer') ? 'active bg-warning text-dark rounded' : ''}`} to="/soccer">SOCCER</Link>
            </li>
            <li className="nav-item">
              <Link
  className={`nav-link text-white px-3 py-2 text-nowrap ${isActive('/horse') ? 'active bg-warning text-dark rounded' : ''}`}
  to="/horse"
>
  HORSE RACE
</Link>

            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 py-2 ${isActive('/greyhound') ? 'active bg-warning text-dark rounded' : ''}`} to="/greyhound">GREYHOUND</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 py-2 ${isActive('/politics') ? 'active bg-warning text-dark rounded' : ''}`} to="/politics">POLITICS</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white px-3 py-2 ${isActive('/menucasino') ? 'active bg-warning text-dark rounded' : ''}`} to="/menucasino">CASINO</Link>
            </li>
            <li className="nav-item">
              <Link
  className={`nav-link text-white px-3 py-2 text-nowrap ${isActive('/icasino') ? 'active bg-warning text-dark rounded' : ''}`}
  to="/icasino"
>
  I-CASINO
</Link>

            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
