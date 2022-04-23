import React from 'react';
import '../assets/scss/Login.scss';
import '../assets/scss/Style.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="tit">
          <h3>로그인</h3>
        </div>
        <div className="section">
          <p>Welcome! 스타벅스 코리아에 오신 것을 환영합니다.</p>
          <div className="form">
            <label for="id"></label>
            <input
              type="text"
              id="id"
              className="mb10"
              placeholder="아이디를 입력해 주세요."
            ></input>
            <label for="pwd"></label>
            <input
              type="text"
              id="pwd"
              className="mb10"
              placeholder="비밀번호를 입력해 주세요."
            ></input>
            <span className="chkBox">
              <input type="checkbox" id="chkBox"></input>
              <label for="chkBox">아이디저장</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
