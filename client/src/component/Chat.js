import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import "./Chat.css"

export default function Chat() {
  const [room, setRoom] = useState("");
  const nicknameRef = useRef;
  const chatListRef = useRef;
  const chatInputRef = useRef;
  const [nickname, setNickname] = useState("");
  const [chatInput, setChatInput] = useState("");

  const socket = io.connect("http://localhost:8080");
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageRecived(data.message);
    });
    }, [socket]);

  const sendMessage = () => {
    const params = {
      name: nickname,
      msg: chatInput,
    };
    socket.emit("chatting", params);
  };
  //채팅받을때
  socket.on("chatting", (data) => {
    console.log(data);
     
    });
  return (
    <div className="wrapper">
      <div className="user-container">
        대화명:
        <input
          type="text"
          id="nickname"
          ref={nicknameRef}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        ></input>
      </div>
      <div className="display-container">
        <ul className="chatting-list" ref={chatListRef}></ul>
            <li>
                <span className="profile">spanbn</span>
                    <sapn className="user">깔깔</sapn>
                    <img src="http://placeing.com/50/50/any" alt="any"></img>
            </li>
      </div>
      <div className="input-container">
        <span className="message">그래 반가워</span>
        <span className="time">오후 2:10</span>
        <input
          type="text"
          className="chatting-input"
          ref={chatInputRef}
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        ></input>
        <button className="send-button" onClick={sendMessage}>
          전송
        </button>
        {chatInput.map(({name,msg}, index)=>(
           <div>
           <label>d</label>
            <input type="text">t</input>
            </div>
        ))
        }
      </div>
    </div>
  );
}
