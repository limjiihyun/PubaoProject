import React from 'react'
import styled from 'styled-components';
import RankingImage from './RankingImage';

const HomeContainer = styled.div`
  height: 700px; 
  width: 1100px;
  margin: 0 auto;
  background-color: rgba(0,0,0,0.5);
`;

// 이미지 데이터 필요
// title 데이터 필요

export default function Home() {
  return (
    <HomeContainer>
      <RankingImage/>
    </HomeContainer>
  )
}

