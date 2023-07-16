import styled  from "@emotion/styled";


const DetilContainer = styled.div`
  height: 100vh; 
  width: 100%;
  margin: 0 auto;
  background-image: url("../../goods_image/communityimg.png");
`;

const PostDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  height: 830px;
  margin: 0 auto !important;
  @media (max-width : 756px) {
    width: 90%;
  }
`

const H1Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  > div {
    font-size: 25px;
  }
  
  > div:last-child {
    font-size: 16px;
  }
`;


const ContentDiv = styled.div`
`;


const SpinnerDiv = styled.div`
    width: 100%;
    height: calc(100vh - 2rem);
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
`

const Post = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    padding: 30px 20px;

    box-shadow: 0px 19px 38px rgba(0,0,0,0.03),
    0px 15px 12px rgba(0,0,0,0.1);
    h1 {
        font-weight: bold;
    }
    p {
        margin-bottom: 0px;
    }
`

const BtnDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;
    button{
        border-radius:15px;
        padding: 5px 10px;
        font-weight: bold;
        &.edit{
            background-color: white;
            color: black;
            border: 1px solid black;
            &:hover{
            background-color: black;
            color: white;
            border: 1px solid black;
            }
        }
        &.delete{
            margin-left: 30px;
            background-color: white;
            color: black;
            border: 1px solid black;
            &:hover{
                background-color: black;
                color: white;
                border: 1px solid black;
            }
        }
    }
`



export {DetilContainer, PostDiv, SpinnerDiv, Post, BtnDiv, H1Div, ContentDiv}