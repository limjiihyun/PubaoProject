import React,{useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostDiv, Post, BtnDiv, DetilContainer,H1Div, ContentDiv } from '../../Style/PostDetailCSS'; // Import the necessary CSS styles

export default function Detail(props) {
  const { postNum } = useParams();
  const navigate = useNavigate();
  const [Flag, setFlag] = useState(false)
  const user = useSelector((state) => state.user);

  const deleteHandle = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const fetchData = async () => {
        try {
          const response = await axios.delete(`https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/community/lounge/${postNum}`);
          if (response.status === 200) {
            alert("게시글이 삭제되었습니다.");
            navigate('/community');
          }
        } catch (err) {
          alert("게시글이 삭제되었습니다.");
        }
      };

      fetchData();
    }
  };

  return (
    <div>
      <DetilContainer>
      <PostDiv>
        <>
          <Post>
            <H1Div>
            <div>제목 : {props.postInfo.title}</div>
            <div>작성자 : {props.postInfo.nickname}</div>
            </H1Div>
            {props.postInfo.img ? (
              <img src={props.postInfo.img} alt="" style={{ width: "100%", height: "70%", marginBottom:'20px' }} />
            ) : null}
            <ContentDiv>
            <div>{props.postInfo.content}</div>
            </ContentDiv>
          </Post>
          {props.postInfo.nickname === JSON.parse(localStorage.getItem('login'))?.nickname && (
            <BtnDiv>
              <Link to={`/edit/${postNum}`}>
                <button className="edit">UPDATE</button>
              </Link>
              <button className="delete" onClick={deleteHandle}>
                DELETE
              </button>
            </BtnDiv>
          )}
        </>
      </PostDiv>
      </DetilContainer>
    </div>
  );
}
