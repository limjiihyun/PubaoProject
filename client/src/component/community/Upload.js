import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Galley from "./Galley";
import ImageUpload from "./ImageUpload";
import { useSelector } from 'react-redux'

import {
  UploadDiv,
  UploadForm,
  UploadButtonDiv,
} from '../../Style/UploadCSS.';

export default function Upload() {
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [Image, setImage] = useState('');

  let navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log("dfsdf", user);


  useEffect(() => {
    if(!user.accessToken){
      alert("로그인한 회원만 글을 작성할 수 있습니다.");
      navigate("/login")
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Title === '' || Content === '') {
      return alert('모든 항목을 채워주세요');
    }

    let body = {
      title: Title,
      content: Content,
      img: Image,
      nickname: user.nickname
    };
    console.log('body title content img입니다', body);

    axios
      .post('https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/community/lounge', body)
      .then((response) => {
          alert('작성 성공');
          window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCancle = () => {
    navigate("/community")
  }

  return (
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={Title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        {/* <Galley /> */}
        
        <ImageUpload setImage={setImage} />
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={Content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            Submit
          </button>
          <button onClick={onCancle}>
            Cancle
          </button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
}
