import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import FubaoMovie from "./FubaoMovie";
import ListMainPage from './ListMainPage'
import {AiOutlinePlusCircle} from "react-icons/ai"
// import List from "./List";
import Upload from "./Upload";

const CommunityContainer = styled.div`
  height: 100vh; 
  width: 100%;
  margin: 0 auto;
  background-image: url("../goods_image/communityimg.png");
`;

const Communitysection = styled.div`
  height: 96%; 
  width: 100%;
  margin: 0 auto;
  overflow: scroll;

    /* Hide the scrollbar */
    scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const CommunityNav = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
`;

const StyledAiOutlinePlusCircle = styled(AiOutlinePlusCircle)`
  color: green;
  font-size: 4rem;
`;


export default function Community() {
  const [homeVisible, setHomeVisible] = useState(true);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [movieVisible, setMovieVisible] = useState(false);

  const handleHomeClick = () => {
    setHomeVisible(true);
    setUploadVisible(false);
    setMovieVisible(false);
  };

  const handleUploadClick = () => {
    setHomeVisible(false);
    setUploadVisible(true);
    setMovieVisible(false);
  };

  // const handleMovieClick = () => {
  //   setHomeVisible(false);
  //   setUploadVisible(false);
  //   setMovieVisible(true);
  // };

  return (
    <>
    <CommunityContainer>
    <CommunityNav>
      {/* <Link onClick={handleHomeClick}>LIST</Link> */}
      <Link onClick={handleUploadClick}><StyledAiOutlinePlusCircle /></Link>
      {/* <Link onClick={handleMovieClick}>MOVIE</Link> */}
    </CommunityNav>

    <Communitysection>
      {homeVisible && <ListMainPage />}
      {uploadVisible && <Upload />}
      {/* {movieVisible && <FubaoMovie />} */}
    </Communitysection> 
    </CommunityContainer>
    </>
  )
}
