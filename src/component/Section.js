/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useState } from 'react';
import '../assets/scss/Section.scss';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Section() {
  const [click, setClick] = useState(true);
  // Animation
  window.addEventListener('scroll', function () {
    let move01 = document.querySelector('.bean-box');
    let move02 = document.querySelector('.bean-txt');
    let move03 = document.querySelector('.pick .title');
    let move04 = document.querySelector('.pick .text');
    let move05 = document.querySelector('.pick .pick-btn');

    let position = window.scrollY;
    // console.log('scrollY', position);

    if (position > 223) {
      move01.style.animation = 'beanSlide01 2s ease-out';
      move02.style.animation = 'beanSlide02 2s ease-out';
    }
    if (position > 1175) {
      move03.style.animation = 'front01 2s ease-out';
      move04.style.animation = 'front02 2s ease-out';
      move05.style.animation = 'view 2s ease-out';
    } else {
      move03.style.animation = 'back01 2s ease-out forwards';
      move04.style.animation = 'back02 2s ease-out forwards';
      move05.style.animation = 'view 2s ease-out forwards';
    }
  });
  window.onload = function () {
    let show01 = document.querySelector('.citrus');
    let show02 = document.querySelector('.latte');
    let show03 = document.querySelector('.dolce');

    show01.style.animation = 'view 1s 0.5s ease 1 forwards';
    show02.style.animation = 'view 1s 1s ease 1 forwards';
    show03.style.animation = 'view 1s 1.5s ease 1 forwards';
  };

  // Slider
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  };

  return (
    <>
      <div className="wrap">
        <div className="area"></div>
        {/* section01 start */}
        <section className="section01">
          <div className="background">
            <div className="inner">
              <div className="container">
                <div className="title">
                  <img src={require('../assets/Images/main/count_title.png')} />
                  <button className="detail-btn">자세히 보기</button>
                </div>
                <div className="citrus">
                  <img src={require('../assets/Images/main/citrus.png')} />
                </div>
                <div className="latte">
                  <img src={require('../assets/Images/main/latte.png')} />
                </div>
                <div className="dolce">
                  <img src={require('../assets/Images/main/milktea.png')} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section01 end */}
        {/* section02 start */}
        <section className="section02">
          <div className="bar-option">
            <div className={`left-bar ${click && 'active'}`}>
              <Link to="/" onClick={() => setClick(!click)}>
                공지사항
              </Link>
              <div className="slider">
                <Slider {...settings}>
                  <div className="item">
                    <Link to="/">
                      <span>공지사항01</span>
                    </Link>
                  </div>
                  <div className="item">
                    <Link to="/">
                      <span>공지사항02</span>
                    </Link>
                  </div>
                  <div className="item">
                    <Link to="/">
                      <span>공지사항03</span>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
            <div className={`right-bar ${!click && 'active'}`}>
              <Link to="/" onClick={() => setClick(!click)}>
                스타벅스 프로모션
              </Link>
            </div>
          </div>

          <div className="gift">
            <div className="gift-area">
              <div className="logo">
                <img src={require('../assets/Images/ico/rewards_logo.png')} />
              </div>
              <div className="info">
                <h2>
                  스타벅스만의 특별한 혜택, <strong>스타벅스 리워드</strong>
                </h2>
                <div className="flex">
                  <p>
                    <strong>스타벅스 회원이세요?</strong> 로그인을 통해 나만의
                    리워드를 확인해보세요.
                    <br />
                    <strong>스타벅스 회원이 아니세요?</strong> 가입을 통해
                    리워드 혜택을 즐기세요.
                  </p>
                  <div className="login-btn">
                    <Link to="/" className="join">
                      회원가입
                    </Link>
                    <Link to="/" className="login">
                      로그인
                    </Link>
                  </div>
                </div>
                <div className="flex">
                  <p style={{ fontSize: 14 }}>
                    회원 가입 후, 스타벅스 e-Gift Card를{' '}
                    <strong>
                      "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
                    </strong>
                    <br />
                    카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를
                    하시면 무료 음료쿠폰을 드립니다!
                  </p>
                  <Link to="/" className="card-btn">
                    e-Gift Card 선물하기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section02 end */}

        <section className="section03">
          <div className="bean">
            <div className="bean-box">
              <img
                src={require('../assets/Images/main/bean_coffee.png')}
                className="img"
              />
            </div>
            <div className="bean-txt">
              <img src={require('../assets/Images/main/bean_text.png')} />
              <div className="bean-btn">
                <Link to="/">자세히 보기</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section04">
          <div className="hawaii">
            <div className="hawaii-tit">
              <img src={require('../assets/Images/main/hawaii_title.png')} />
            </div>
            <div className="hawaii-btn">
              <div>
                <Link to="/">자세히 보기</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section05">
          <div className="pick animation">
            <div className="title"></div>
            <div className="text"></div>
            <div className="pick-btn">
              <Link to="/">자세히 보기</Link>
            </div>
          </div>
          <div className="pick">
            <div className="market"></div>
          </div>
        </section>
        <section className="section06">
          <div className="reserve">
            <div className="title">
              <img src={require('../assets/Images/main/reserve_title.png')} />
            </div>
            <div className="special">
              <img src={require('../assets/Images/main/reserve_visual.png')} />
            </div>
          </div>
        </section>
        <section className="section07">
          <div className="store">
            <div className="store-exp01"></div>
            <div className="store-exp02"></div>
            <div className="store-exp03"></div>
            <div className="store-exp04"></div>
            <div className="store-txt01"></div>
            <div className="store-txt02"></div>
            <div className="store-btn">
              <Link to="/">매장찾기</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Section;
