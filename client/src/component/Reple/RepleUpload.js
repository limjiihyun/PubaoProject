import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RepleAreaDiv, RepleUploadDiv } from '../../Style/RepleCSS';

export default function RepleUpload(props) {
  let params = useParams();
  const [Reple, setReple] = useState('');
  const user = useSelector((state) => state.user);
  // console.log("dfsdfsd", user);
  // console.log("18181818181" , params);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Reple) {
      return alert('Enter alert.');
    }
    //console.log("hihiihihi")

    let body = {
      reple: Reple,
      nickname: user.nickname,
      postId: JSON.parse(localStorage.getItem('login')).userId,
      detailnum: params.postNum
    };

     console.log("11111", body.detailnum)

    axios.post('https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/reple/submit', body).then((response) => {
      console.log("res", response)
      if (response.data.success) {
        alert("댓글 작성 완료");
        window.location.reload();
      } else {
        alert("댓글 작성 실패");
      }
    });
  };

  return (
    <RepleAreaDiv>
      <RepleUploadDiv>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={Reple}
            onChange={(e) => {
              setReple(e.currentTarget.value);
            }}
          />
          <button type="submit">click</button>
        </form>
      </RepleUploadDiv>
    </RepleAreaDiv>
  );
}
