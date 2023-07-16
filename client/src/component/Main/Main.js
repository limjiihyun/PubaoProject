import React from 'react'
import styled from "styled-components";
import ReactPlayer from "react-player";

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  /* background-color: #1B0029; */
`;
// 이미지 데이터 필요
// title 데이터 필요
export default function Main() {
  return (
    <HomeContainer>
      <ReactPlayer
        url={process.env.PUBLIC_URL + "/video/realmain3.mp4"}
        width="100%"
        height="auto"
        playing={true}
        muted={true}
        controls={false}
        loop={true}
      />
    </HomeContainer>
  );
}