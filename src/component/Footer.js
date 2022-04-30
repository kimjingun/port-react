import React from 'react';
import '../assets/scss/Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="marketing">
        <ul>
          <li className="title">
            <Link to="/">COMPANY</Link>
          </li>
          <li>
            <Link to="/">한눈에 보기</Link>
          </li>
          <li>
            <Link to="/">스타벅스 사명</Link>
          </li>
          <li>
            <Link to="/">스타벅스 소개</Link>
          </li>
          <li>
            <Link to="/">국내 뉴스룸</Link>
          </li>
          <li>
            <Link to="/">세계의 스타벅스</Link>
          </li>
          <li>
            <Link to="/">글로벌 뉴스룸</Link>
          </li>
        </ul>

        <ul>
          <li className="title">
            <Link to="/">CORPORATE SALES</Link>
          </li>
          <li>
            <Link to="/">단체 및 기업 구매 안내</Link>
          </li>
        </ul>

        <ul>
          <li className="title">
            <Link to="/">PARTNERSHIP</Link>
          </li>
          <li>
            <Link to="/">신규 입점 제의</Link>
          </li>
          <li>
            <Link to="/">협력 고객사 등록신청</Link>
          </li>
        </ul>

        <ul>
          <li className="title">
            <Link to="/">ONLINE COMMUNITY</Link>
          </li>
          <li>
            <Link to="/">페이스북</Link>
          </li>
          <li>
            <Link to="/">트위터</Link>
          </li>
          <li>
            <Link to="/">유튜브</Link>
          </li>
          <li>
            <Link to="/">인스타그램</Link>
          </li>
        </ul>

        <ul>
          <li className="title">
            <Link to="/">RECRUIT</Link>
          </li>
          <li>
            <Link to="/">채용 소개</Link>
          </li>
          <li>
            <Link to="/">채용 지원하기</Link>
          </li>
        </ul>
      </div>
      <div className="use">
        <ul>
          <li className="strong">
            <Link to="/">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="/">영상정보처리기기 운영관리 방침</Link>
          </li>
          <li>
            <Link to="/">홈페이지 이용약관</Link>
          </li>
          <li>
            <Link to="/">위치정보 이용약관</Link>
          </li>
          <li>
            <Link to="/">스타벅스 카드 이용약관</Link>
          </li>
          <li>
            <Link to="/">비회원 이용약관</Link>
          </li>
          <li>
            <Link to="/">My DT Pass 서비스 이용약관</Link>
          </li>
          <li>
            <Link to="/">윤리경영 핫라인</Link>
          </li>
        </ul>
        <div className="btn">
          <button type="botton">찾아오시는 길</button>
          <button type="botton">신규입점제의</button>
          <button type="botton">사이트 맵</button>
        </div>
        <ul>
          <li>사업자등록번호 : 123-45-67890</li>
          <li>주식회사 에스씨케이컴퍼니 대표이사 : 송 데이비드 호섭</li>
          <li>TEL : 1234-5678</li>
          <li>개인정보 책임자 : 하익성</li>
        </ul>
        <p>ⓒ 2022 Starbucks Coffee Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
