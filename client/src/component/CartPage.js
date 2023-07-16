import React, { useEffect } from "react";
import axios from "axios";
import SERVER from "../lib/constant";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCount, downCount, deleteGoods } from "../Reducer/cartSlice";
export default function CartPage(props) {
  let navigate = useNavigate();
  let state = useSelector((state) => state);
  console.log(state.cart[0].name);
  let dispatch = useDispatch();
  console.log(state.cart.length);
  let total = [0];
  console.log("하이" + state.cart.price);
  if (state.cart.length > 0) {
    for (let a = 1; a < state.cart.length; a++) {
      let b = state.cart[a].price * state.cart[a].count;
      total.push(b);
    }
  }
  const sum = total.reduce((x, y) => x + y);
  const real_total = sum + 3000;
  const [ordermodalOpen, setOrderModalOpen] = useState(false);
  const closeModal = () => {
    setOrderModalOpen(false);
  };
  const orderModal = () => {
    setOrderModalOpen(true);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app/shop/detail/:id`,
    }).then(() => {
      console.log("상품 세부 열기");
    });
  }, []);
  return (
    <>
      <div className="cart-logo">장바구니</div>
      <div className="cart-box">
        <div className="table-box-main">
          {state.cart.length === 1 ? (
            <>
              <div className="empty-text">장바구니에 상품이 없습니다!</div>
            </>
          ) : (
            (
              <div className="table-box1">
                <div>이미지</div>
                <div>상품명&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div>가격</div>
                <div>수량 변경하기</div>
                <div>삭제하기</div>
              </div>
            ) &&
            state.cart.map((a, i) =>
              state.cart[i].id !== 0 ? (
                <>
                  <div className="table-box2" key={i}>
                    <img
                      className="cart-img-box"
                      src={
                        process.env.PUBLIC_URL +
                        "/goods_image/" +
                        state.cart[i].id +
                        ".jpg"
                      }
                      width="20%"
                    />
                    <div>{state.cart[i].name}</div>
                    <div>{state.cart[i].price}</div>
                    <div>{state.cart[i].count}</div>
                    <div>
                      <button
                        className="decrease-btn"
                        onClick={() => {
                          if (state.cart[i].count > 1) {
                            dispatch(downCount(state.cart[i].id));
                          }
                        }}
                      >
                        -
                      </button>
                      <button
                        className="increase-btn"
                        onClick={() => {
                          dispatch(addCount(state.cart[i].id));
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        className="delete-btn"
                        onClick={() => {
                          dispatch(deleteGoods(state.cart[i].id));
                        }}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="order-btn-box">
                    <div className="price-total">
                      상품 구매 금액: {sum} + 배송비 3,000=합계: {real_total}
                    </div>
                    <div
                      className="order-btn"
                      onClick={orderModal}
                      // onClick={() => {
                      //   navigate("/order");
                      // }}
                    >
                      주문하기
                    </div>
                  </div>
                  <div className="table-box1">
                    <div>이미지</div>
                    <div>상품명</div>
                    <div>가격</div>
                    <div>수량</div>
                    <div>변경하기</div>
                    <div>삭제하기</div>
                  </div>
                </>
              )
            )
          )}
        </div>
      </div>
      <div>
        {ordermodalOpen && (
          <div
            id="modal"
            className="modal-overlay"
            onClick={handleOverlayClick}
          >
            <div className="modal-window">
              <div className="title">
                <h2>카트 담기</h2>
              </div>
              <div className="close-area" onClick={closeModal}>
                X
              </div>
              <div className="in-cart-box">
                <img
                  className="in-cart-img"
                  src={process.env.PUBLIC_URL + "/goods_image/cart-panda2.png"}
                />
              </div>
              <div className="content">
                <p className="content">로그인 하시면 더 큰 혜택이 있어요</p>
              </div>
              <div className="btn-box">
                <div
                  className="yes-btn"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  로그인 하러가기
                </div>
                <div> / </div>
                <div
                  className="no-btn"
                  onClick={() => {
                    navigate("/order");
                  }}
                >
                  비회원 주문하기
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}