/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/scss/Header.scss';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="menu">
        <Link to="/">
          <img src={require('../assets/Images/ico/logo.png')} />
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/coffe">COFFEE</Link>
            </li>
            <li>
              <a onClick={() => navigate('/menu')}>MENU</a>
            </li>
            <li>
              <Link to="/">STORE</Link>
            </li>
            <li style={{ width: '153px' }}>
              <Link to="/">RESPONSIBILITY</Link>
            </li>
            <li style={{ width: '225px' }}>
              <Link to="/">STARBUCKS REWARDS</Link>
            </li>
            <li style={{ width: '131px' }}>
              <Link to="/">WHAT'S NEW</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
