import React, { useEffect, useState, useRef } from 'react'
import { RepleContentDiv, RepleUploadDiv } from '../../Style/RepleCSS'
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function RepleContent(props) {
    const [ModalFlag, setModalFlag] = useState(false);
    const user = useSelector((state) => state.user);
    const [EditFlag, setEditFlag] = useState(false)
    const [Reple, setReple] = useState(props.reple.reple);
    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false));

    // console.log("user정보", user);  nickname : 내가 만든 아이디 , uid : 내 이름 , accessToken : 토큰 값
    // console.log("props 값", props.reple.nickname);
    
    const SubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            id: props.reple.id,
            nickname: user.nickname,
            reple: Reple
        }

        axios.post("https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/reple/edit" , body).then((response) => {
            if(response.data.result){
                alert("댓글 수정이 성공하였습니다.")
            } else {
                alert("댓글 수정이 실패하였습니다.")
            }
            return window.location.reload();
        })
    }

    const DeletHandler = (e) => {
        e.preventDefault();

        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                id: props.reple.id,
                nickname: user.nickname
            }
    
            axios.post("https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/reple/delete" , body).then((response) => {
                if(response.data.result){
                    alert("댓글이 삭제 되었습니다.")
                } 
                return window.location.reload();
            })
          }
    }

    console.log("1111",props.reple);
    console.log("222",user.nickname);

  return (
        <RepleContentDiv>
            <div className='author'>
                <p>{props.reple.nickname}</p>
                {props.reple.nickname === user.nickname && (
                    <div className='modalControl'>
                        <span onClick={() => setModalFlag(true)}>...</span>
                        {ModalFlag && (
                            <div className='modalDiv' ref={ref}>
                                <p onClick={() => {setEditFlag(true); setModalFlag(false)}}>수정</p>
                                <p className='delete' onClick={(e) => DeletHandler(e)}>삭제</p>
                            </div>
                        )}
                    </div>                    
                )}
            </div>
            {EditFlag ? (
                    <RepleUploadDiv>
                    <form>
                      <input
                        type="text"
                        value={Reple}
                        onChange={(e) => {
                          setReple(e.currentTarget.value);
                        }}
                      />
                      <button onClick={(e) => SubmitHandler(e)}>click</button>
                    </form>
                    <button className='cancel' onClick={(e) => {
                        e.preventDefault();
                        setEditFlag(false);
                    }}>취소</button>
                    </RepleUploadDiv>
            ) : (<p>{props.reple.reple}</p>) }
        </RepleContentDiv>
  )
}

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if(!ref.current || ref.current.contains(event.target)){
                    return ;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () =>{
                document.removeEventListener("mousedown", listener)
                document.removeEventListener("touchstart", listener)
            }
        },
        [ref, handler]
    )
}
