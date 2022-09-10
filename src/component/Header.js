/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/scss/Header.scss';
import './Login.js';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // function adminOut() {
  //   var id = document.querySelector('#id');
  //   var pwd = document.querySelector('#pwd');

  //   if (id.value === 'admin' || pwd.value === 123) {
  //     window.location.href = '/';
  //   } else {
  //     alert('로그인을 할 수 없습니다.');
  //   }
  // }

  return (
    <>
      <header className="header">
        <div className="menu">
          <Link to="/" onClick={window.onload}>
            <img src={require('../assets/Images/ico/logo.png')} />
          </Link>
          <nav className="nav">
            <ul className="sub_nav">
              <li className="SignOut">
                <Link to="/">Sign Out</Link>
              </li>
              <li id="addminAdd">
                <Link to="/component/Login">Sign In</Link>
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
