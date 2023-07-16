import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams, Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


import { UploadDiv, UploadForm, UploadButtonDiv} from "../../Style/UploadCSS.";

export default function Edit() {
    let params = useParams();
    const [PostInfo, setPostInfo] = useState([]);
    const [flag, setFlag] = useState(false);
    const [Title, setTitle] = useState("");
    const [Content, setContent] = useState("");    
    let navigate = useNavigate();
    console.log("f1111dsfsd", params.postNum);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          let body = {
            postNum: params.postNum
          };
          const response = await axios.patch(`https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/community/lounge/${params.postNum}`, body);
          console.log(response);
          if (response.data.success) {
            setPostInfo(response.data.data);
            setFlag(true);
          }
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData();
    }, [params.postNum]);
  
    useEffect(() => {
      setTitle(PostInfo.title);
      setContent(PostInfo.content);
    }, [PostInfo]);
  
    const onSubmit = (e) => {
      e.preventDefault();
      if (Title === "" || Content === "") {
        return alert("모든 항목을 채워주세요!");
      }
  
      let body = {
        title: Title,
        content: Content,
        postNum: params.postNum
      };
  
      axios.patch(`https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/community/lounge/${params.postNum}`, body)
        .then((response) => {
          if (response.status === 200) {
            alert("글 수정이 완료되었습니다.");
            navigate(`/community/detail/${params.postNum}`);
          } else {
            alert("글 수정이 실패하였습니다.");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
  
    return (
      <UploadDiv>
        <UploadForm>
          <label htmlFor='title'>제목</label>
          <input
            id='title' 
            type="text" 
            value={Title} 
            onChange={(e) => {
              setTitle(e.target.value);
            }} 
          />
          <label htmlFor='content'>내용</label>
          <textarea 
            id='content'
            value={Content} 
            onChange={(e) => {
              setContent(e.target.value);
            }} 
          />
          <UploadButtonDiv>
            <button onClick={onSubmit}>Submit</button> 
            <button className='cancel' onClick={(e) => {
                e.preventDefault();
                navigate(-1);
            }}>Cancel</button> 
          </UploadButtonDiv>
        </UploadForm>
      </UploadDiv>
    );
  }
  