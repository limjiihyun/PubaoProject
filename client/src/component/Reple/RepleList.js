import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RepleListDiv, RepleContentDiv } from '../../Style/RepleCSS';
import RepleContent from './RepleContent';
import { useParams } from 'react-router-dom';

export default function RepleList(props) {
  const [repleList, setRepleList] = useState([]);
  const { postNum } = useParams();

  useEffect(() => {
    axios.get(`https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/reple/getReple/${postNum}`).then((response) => {
      if (response.data.success) {
        setRepleList([...response.data.data]);
      }
    });
  }, [postNum]);

  return (
    <RepleListDiv>
      {repleList.map((reple, idx) => {
        return <RepleContent reple={reple} key={idx} />;
      })}
    </RepleListDiv>
  );
}
