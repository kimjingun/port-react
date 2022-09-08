import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './component/Header';
import GlobalStyles from './Reset';
// import CoffeList from './pages/coffe/CoffeList';
import Login from './component/Login';
import Footer from './component/Footer';
ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/pages/coffe" element={<CoffeList />} /> */}
        <Route path="/component" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  </React.Fragment>,

  document.getElementById('root')
);
