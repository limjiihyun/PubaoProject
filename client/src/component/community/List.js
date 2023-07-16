import React from 'react';
import { Link } from 'react-router-dom';
import { ListDiv, ListItem } from '../../Style/ListCSS.js';
import { useSelector } from 'react-redux';
import styled from "@emotion/styled";
import moment from 'moment';
import 'moment/locale/ko';

const TimeDiv = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

export default function List(props) {
  console.log("1111111", props);
  const SetTime = (createdAt, updatedAt) => {
    const created = moment(createdAt);
    console.log("create111", created);
    const updated = moment(updatedAt);
    console.log("updated222", updated);
    if (created === updated) {
      return created.format('YYYY MMMM Do, hh:mm');
    } else {
      return `${updated.format('YYYY MMMM Do, hh:mm')}`;
    }
  };

  return (
    <ListDiv>
      {props.postList.map((post, idx) => (
        <ListItem key={idx}>
          <Link to={`detail/${post.id}`}>
            <p className="title" style={{  width: '100%', overflow: 'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis',wordBreak:'break-all' }}>{post.title}</p>
            <p className="author" style={{ textAlign: "right", overflow: 'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis',wordBreak:'break-all'}}>{post.nickname}</p>
            {post.img ? (
              <img src={post.img} alt="" style={{ width: "100%", height: "70%", marginTop:'5px', borderRadius:'5px'  }} />
            ) : null}
              <p style={{ whiteSpace: 'normal', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden',marginTop:'5px'  }}>{post.content}</p>
            <TimeDiv>
             <p>{SetTime(post.createdAt, post.updatedAt)}</p>
            </TimeDiv>
          </Link>
        </ListItem>
      ))}
    </ListDiv>
  );
}
