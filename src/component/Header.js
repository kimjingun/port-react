/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/scss/Header.scss';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <div className="menu">
          <Link to="/" onClick={window.onload}>
            <img src={require('../assets/Images/ico/logo.png')} />
          </Link>
          <nav className="nav">
            <ul className="sub_nav">
              <li>
                <Link to="/component">Sign In</Link>
              </li>
              <li>
                <Link to="/">My Starbucks</Link>
              </li>
              <li>
                <Link to="/">Customer Service & Ideas</Link>
              </li>
              <li>
                <Link to="/">Find a Store</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/">COFFEE</Link>
              </li>
              <li>
                {/* <Link onClick={() => navigate('/menu')}>MENU</Link> */}
                <Link to="/">MENU</Link>
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
      <div style={{ height: '120px' }}></div>
    </>
  );
}

export default Header;
