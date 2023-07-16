import React from "react";
import styled from "styled-components";
import PubaoInfo from "./PubaoInfo";
import "./About.css";
const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url("/images/fuobao.jpeg"); */
  background-color: #FFF1DD;
  background-size: cover;
  /* color: white; */
  /* display: flex; */
`;
export default function About() {
  const handleClick = () => {
    window.open("https://namu.wiki/w/%ED%91%B8%EB%B0%94%EC%98%A4", "_blank");
  };
  return (
    <>
      <AboutContainer>
        <div className="about-container">
          <img
            className="about-bg-img"
            src={process.env.PUBLIC_URL + "goods_image/aboutimg.png"}
            width="100%"
          />
          <div className="about-title">
          <div>PUBAO STORY !</div>
          <PubaoInfo />
          </div>
          <div className="about-inner">
            2014년 중국 주석 시진핑의 방한 이후 에버랜드로 들여온 러바오와
            아이바오의 새끼로, 2020년 7월 20일에 대한민국 최초로 자연 분만으로
            태어난 판다이다. 현재 에버랜드에서 사육 중인 동물들 중 호랑이
            남매들(태범, 무궁, 호랑이 오둥이)과 함께 가장 인기가 높은 동물이다.
            이름의 뜻은 '행복을 주는 보물'이라는 뜻이다.
          </div>
          <div className="about-inner2">
            가족은 아빠 러바오, 엄마 아이바오, 쌍둥이 여동생들이 있다.
          </div>
          <div className="about-more" target="_blank" onClick={handleClick}>
            더보기
          </div>
        </div>
        {/* <div className="yellow-title">PUBAO STORY !</div>
        <PubaoInfo></PubaoInfo>
        <div className="yellow-main-box">
          <div className="inner-img">
            <img
              src={process.env.PUBLIC_URL + "goods_image/yellow-pubao.jpg"}
              width="100%"
            />
          </div>
          <div className="inner-text">
            <div className="inner-text2">
              <div className="inner-title"></div>
              2014년 중국 주석 시진핑의 방한 이후 에버랜드로 들여온 러바오와
              아이바오의 새끼로, 2020년 7월 20일에 대한민국 최초로 자연 분만으로
              태어난 판다이다. 현재 에버랜드에서 사육 중인 동물들 중 호랑이
              남매들(태범, 무궁, 호랑이 오둥이)과 함께 가장 인기가 높은
              동물이다. 이름의 뜻은 '행복을 주는 보물'이라는 뜻이다.
              <br />
              <br />
              가족은 아빠 러바오, 엄마 아이바오, 쌍둥이 여동생들이 있다.
              <div className="inner-btn" target="_blank" onClick={handleClick}>
                더보기
              </div>
              <div></div>
            </div>
          </div>
        </div> */}
      </AboutContainer>
    </>
  );
}