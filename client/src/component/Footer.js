import React from "react";
import styled from "styled-components";
const FooterContainer = styled.div`
  /* bottom: 0;
  left: 0; */
  height: 250px;
  width: 100%;
  background-color: #F8F8F8;
  margin: 0 auto;
`;
export default function Footer() {
  return (
    <FooterContainer>
      <hr />
      <br />
      <div className="footer-text">
        프론트엔드 : 백승찬, 임지현 / 백엔드 : 백승찬, 정현호. 이미래{" "}
      </div>
      <div className="footer-text">2023년 7월 2일 (월) ~ 2023년 7월 13일</div>
    </FooterContainer>
  );
}