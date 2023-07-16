import React, { useState, useRef, useEffect } from "react";
import "./User.css";
import { SERVER } from "../../lib/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginFunc() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const inputEmail = useRef();
  const inputPassword = useRef();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${SERVER}/user/login`,
    }).then(() => {
      console.log("로그인 화면 열기");
    });
  }, []);

  const checkInput = () => {
    if (Email.trim().length === 0) {
      inputEmail.current.focus();
      return false;
    }
    if (PW.trim().length === 0) {
      inputPassword.current.focus();
      return false;
    }
    return true;
  };

  const login = async (e) => {
    e.preventDefault();
    if (!checkInput()) return;
    const user = {
      Email,
      PW,
    };

    axios({
      method: "POST",
      url: `${SERVER}/user/signin`,
      data: user,
    })
      .then((res) => {
        console.log("user정보", res);
        if (res.data.result) {
          console.log(res.data);
          alert(`${res.data.nickname}님 환영합니다!`);
          localStorage.setItem(
            "login",
            JSON.stringify({
              token: res.data.token,
              userId: res.data.userID,
              nickname: res.data.nickname,
            })
          );
          window.location.replace("/");
        } else {
          console.log(res);
          alert("아이디 혹은 비밀번호가 맞지 않습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SignupFunc = () => {
    navigate('/signup')
  };

  return (
    <>
      <div className="wrapper">
        <img src="pubaoLogo.png" className="img" />
        <form className="form-signin">
          <h1 className="form-signin-heading">login</h1>
          <div className="inputs">
            <div className="input">
              <label className="info">Email: </label>
              <input
                type="text"
                className="form-control text"
                name="email"
                placeholder="Email Address"
                required=""
                // autoFocus=""
                value={Email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                ref={inputEmail}
              />
            </div>
            <div className="input">
              <label className="info">PW: </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required=""
                value={PW}
                onChange={(e) => setPW(e.currentTarget.value)}
                ref={inputPassword}
              />
            </div>
          </div>
          <br />
          <label className="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button className="btn" type="submit" onClick={login}>
            Login
          </button>
          <button className="btn" type="submit" onClick={SignupFunc}>
            Signup
          </button>
        </form>
      </div>
    </>
  );
}
