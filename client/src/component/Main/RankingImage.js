import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const StyledBody = styled.body`
  width: 100%;
  height: 700px;
  background-color: red;
  /* background: url("https://s3.amazonaws.com/ritalbradley-dev-photos/twinkle-back.gif"); */
`;

const Container = styled.div`
  max-width: 100%;
  float: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;


const BackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: white;
  /* background-color: white; */
  /* background-image: -moz-linear-gradient(
    top left,
    rgba(29, 38, 113, 0.60),
    rgba(195, 55, 100, 0.60)
  ); */
  /* background-image: -ms-linear-gradient(
    top left,
    rgba(29, 38, 113, 0.60),
    rgba(195, 55, 100, 0.60)
  );
  background-image: -webkit-linear-gradient(
    top left,
    rgba(29, 38, 113, 0.60),
    rgba(195, 55, 100, 0.60)
  );
  background-image: -o-linear-gradient(
    top left,
    rgba(29, 38, 113, 0.60),
    rgba(195, 55, 100, 0.60)
  );
  background-image: linear-gradient(
    to bottom right,
    rgba(29, 38, 113, 0.60),
    rgba(195, 55, 100, 0.60)
  ); */
  /* background-size: auto; */
`;

const Heading = styled.h1`
  color: #fff;
  font-family: 'Monoton', cursive;
  font-size: 70px;
  text-shadow: 2px 2px 10px #1D2671, 4px 4px 15px lightgreen;
  margin: 0 auto;
`;


const List = styled.ul`
  perspective: 600;
  margin: 0 auto;
  display: flex;
`;

const ListItem = styled.li`
  width: 300px;
  height: 400px;
  
  float: left;
  list-style: none;
  margin-top: 50px;
  margin-right: 20px;
  margin-bottom: 50px;
  position: relative;
  cursor: pointer;
  counter-increment: item;

  div {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 5px;
    transition: all 0.5s;
    backface-visibility: hidden;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.30);
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 5px;
  }

  &:hover .front {
    z-index: 0;
    transform: rotateY(180deg);
  }

  &:hover .back {
    transform: rotateY(0);
  }
`;

const Front = styled.div`
  z-index: 3;
  color: #333;
  text-align: center;
  line-height: 200px;
  font-size: 80px;
  font-family: 'Faster One', cursive;
  background: #C33764;
  background: -webkit-linear-gradient(45deg, #b3ffb3 10%, #FFD700 80%);
  background: linear-gradient(45deg, #b3ffb3 10%, #FFD700 80%);

  &:after {
    content: counter(item);
  }
`;



const Back = styled.div`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    /* margin-bottom: 10px; */
  }

  div {
    margin-bottom: 10px;
  }
`;

const RankingImage = () => {
  const [postInfo, setPostInfo] = useState([]);
  const [flag, setFlag] = useState(false);
  const params = useParams();
  console.log("fds", params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/community/detail/rankingimage');
        setPostInfo(response.data.data);
        setFlag(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledBody>
      <Container>
        <Heading className="text-center">Bset Pubao Image</Heading>
        <List>
          {postInfo.map((info, index) => (
            <ListItem key={index}>
              <Front className="front"></Front>
              <Back className="back">
                <img src={info.img} alt="" />
                {/* <div>{info.title}</div> */}
                {/* <div>{info.content}</div> */}
                {/* <div>{info.nickname}</div> */}
              </Back>
            </ListItem>
          ))}
        </List>
      </Container>
      <BackgroundOverlay />
      {flag ? null : <div>Loading...</div>}
    </StyledBody>
  );
};

export default RankingImage;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function RankingImage() {
//   const [postInfo, setPostInfo] = useState([]);
//   const [flag, setFlag] = useState(false);
//   const params = useParams();
//   console.log("fds", params);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/community/detail/rankingimage');
//         setPostInfo(response.data.data);
//         setFlag(true);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log("postInfo:", postInfo);

//   return (
//     <div>
//       {flag ? (
//         <>
//           {postInfo.map((info, index) => (
//             <div key={index}>
//               <img src={info.img} alt="" style={{ width: "10%", height: "10" }} />
//               <div>{info.title}</div>
//               <div>{info.content}</div>
//               <div>{info.nickname}</div>
//               <br />
//             </div>
//           ))}
//         </>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }
