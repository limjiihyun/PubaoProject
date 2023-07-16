import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "./Heading.css";
export default function Heading() {
  const [token, setToken] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  let headerName;
  switch (location.pathname) {
    case "/":
      headerName = "Home";
      break;
    case "/shop":
      headerName = "Shop";
      break;
    case "/community":
      headerName = "Community";
      break;
    default:
      headerName = "Home";
  }
  const goToElement = (element) => {
    navigate("/", { state: { scrollTo: element } });
  };
  function logout() {
    //로컬스토리지 비우기
    localStorage.removeItem("login");
    //토큰 null
    setToken(null);
  }
  const mainClick = () => {
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <div className="inner">
      <div className="header">
        <div className="header_Sub_Category">
          <img
            className="main-logo"
            src={process.env.PUBLIC_URL + "/goods_image/main-logo.png"}
            onClick={mainClick}
          />
          <div
            className="header_name"
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
          >
            "{headerName}"
          </div>
          <div className="cart">
            <RouterLink
              style={{
                color: "white",
                background: "#3B3B3B",
                textDecoration: "none",
              }}
              to="/cart"
              // className="link"
            >
              Cart{" "}
            </RouterLink>
            {/* 로그인이 되어있지 않은 경우(로컬스토리지가 빈 경우) */}
            <div className="login">
              {console.log(localStorage)}
              {localStorage.length === 0 ? (
                <>
                  <RouterLink
                    to={"/login"}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginLeft: "20%",
                    }}
                    onClick={login}
                  >
                    Log in
                  </RouterLink>
                </>
              ) : (
                //로그인이 되어있는 경우(로컬스토리지에 토큰이 있는 경우)
                <div
                  className="login"
                  onClick={logout}
                  style={{
                    color: "white",
                    background: "#3B3B3B",
                    textDecoration: "none",
                    marginLeft: "20%",
                  }}
                >
                  Log out
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="header_Sub">
          <button
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            onClick={() => goToElement("main")}
            className="link"
          >
            HOME
          </button>
          <button
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            onClick={() => goToElement("introduce")}
            className="link"
          >
            ABOUT
          </button>
          <button
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            onClick={() => goToElement("today_ranking")}
            className="link"
          >
            BEST PHOTO
          </button>
          <RouterLink
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            to="/shop"
            className="link"
          >
            SHOP
          </RouterLink>
          <RouterLink
            style={{
              color: "white",
              background: "#3B3B3B",
              textDecoration: "none",
            }}
            to="/community"
            className="link"
          >
            COMMUNITY
          </RouterLink>
        </div>
      </div>
    </div>
  );
}