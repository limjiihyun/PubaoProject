import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Detail from './Detail';

import RepleArea from '../Reple/RepleArea';

export default function PostArea() {
  const [postInfo, setPostInfo] = useState(null);
  const [flag, setFlag] = useState(false);
  const { postNum } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/community/detail/${postNum}`);
        setPostInfo(response.data.data);
        setFlag(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [postNum]);
  console.log("fdsfsdf", postInfo);

  return (
    <div>
      {flag ? (
        <>
          <Detail postInfo={postInfo} />
          <RepleArea postId={postInfo.nickname}/>
        </>
      ) : (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}
