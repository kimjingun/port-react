import React from 'react';
import '../assets/scss/Login.scss';
import '../assets/scss/Style.scss';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login_form">
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
            <button type="button">로그인</button>
            <p>
              * 타 사이트와 비밀번호를 동일하게 사용할 경우 도용의 위험이
              있으므로, 정기적인 비밀번호 변경을 해주시길 바랍니다.
              <br />* 스타벅스 코리아의 공식 홈페이지는 Internet Explorer 9.0
              이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
            </p>
            <ul>
              <li>
                <Link to="/">회원가입</Link>
              </li>
              <li>
                <Link to="/">아이디 찾기</Link>
              </li>
              <li>
                <Link to="/">비밀번호 찾기</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
