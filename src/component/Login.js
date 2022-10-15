import React from 'react';
import '../assets/scss/Login.scss';
import '../assets/scss/Style.scss';
import './Header.js';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function Admin(event) {
    const id = document.getElementById('id');
    const pwd = document.getElementById('pwd');
    const login = document.getElementById('login');
    let errStack = 0;

    if (id.value == 'admin') {
      if (pwd.value == '1') {
        alert('로그인 되었습니다!');
        navigate('/');
      } else {
        alert('아이디와 비밀번호를 다시 한 번 확인해주세요!');
        errStack++;
      }
    } else {
      alert('존재하지 않는 계정입니다.');
    }
    if (errStack >= 5) {
      alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.');
    }

    function keyevent() {
      var keycode = event.keycode;
      alert(keycode);
    }
  }

  return (
    <div className="login_form">
      <div className="container">
        <div className="tit">
          <h3>로그인</h3>
        </div>
        <div className="section">
          <p>Welcome! 스타벅스 코리아에 오신 것을 환영합니다.</p>
          <div className="form">
            <label htmlFor="id"></label>
            <input
              type="text"
              id="id"
              className="mb10"
              placeholder="아이디를 입력해 주세요."
            ></input>
            <label htmlFor="pwd"></label>
            <input
              type="password"
              id="pwd"
              className="mb10"
              placeholder="비밀번호를 입력해 주세요."
            ></input>
            <span className="chkBox">
              <input type="checkbox" id="chkBox"></input>
              <label htmlFor="chkBox">아이디저장</label>
            </span>
            <button
              type="button"
              id="login"
              onKeyPress={'keyevent(this);'}
              onClick={Admin}
            >
              로그인
            </button>
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
