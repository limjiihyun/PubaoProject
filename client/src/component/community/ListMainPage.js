import React, { useState, useEffect } from 'react';
import List from './List';
import axios from 'axios';
import styled from "@emotion/styled";
import { BsSearch } from "react-icons/bs"

const SortDiv = styled.div`
  display: flex;
  position: relative;
  top: 40px;
  left: 60px;
`;

const ListButton = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 10px;
  width: 130px;
`;

const InputButton = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  transition: width 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

const SearchIcon = styled(BsSearch)`
  cursor: pointer;
  position: absolute;
  left: 0;
  transition: opacity 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
`;

const SortButton = styled.div`
  font-size: 20px;
`;

export default function ListMainPage() {
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [inputVisible, setInputVisible] = useState(false);

  const getPostList = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/community', {
          params: { 
            sort: sort,
            searchtitle: searchTitle
          }
        });
        setPostList(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }

  useEffect(() => {
    getPostList();
  }, [sort]);

  const SearchHandler = () => {
    getPostList();
  }

  const handleSearchIconClick = () => {
    setInputVisible(!inputVisible);
  };

  return (
    <div>
      <SortDiv>
        <ListButton>
          <SortButton onClick={() => setSort("최신순")}>최신순</SortButton>
          <SortButton onClick={() => setSort("인기순")}>인기순</SortButton>
        </ListButton>
        <InputButton>
          <Input
            type="text"
            value={searchTitle}
            visible={inputVisible}
            onChange={(e) => setSearchTitle(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) SearchHandler();
            }}
          />
          <SearchIcon
            visible={!inputVisible}
            onClick={handleSearchIconClick}
          />
        </InputButton>
      </SortDiv>
      <List postList={postList} />
    </div>
  );
}
