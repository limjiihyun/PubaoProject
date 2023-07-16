import { useParams } from "react-router-dom";
import "../Detail.css";
import { addItem } from "../../cartstore";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function Goodsdetail(props) {
  let { id } = useParams();
  let findgoods = props.goods.find(function (x) {
    return x.id == id;
  });
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };
  const handleOrderButtonClick = () => {
    setModalOpen(true);
  };
  const handleOrderButtonClick2 = () => {
    setModalOpen2(true);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  const existingButtonClick = (e) => {
    if (e.target.classList.contains("existingButtonClick")) {
      closeModal2();
    }
  };
  let state = useSelector((state) => state);
  return (
    <div className="detail-box">
      <img
        className="detail-img-box"
        src={process.env.PUBLIC_URL + "/goods_image/" + findgoods.id + ".jpg"}
        width="100%"
      />
      <div className="detail-text-box">
        <h4 className="detail-title">{findgoods.product_title}</h4>
        <p className="detail-content">{findgoods.content}</p>
        <p className="detail-price">{findgoods.price}원</p>
        <button
          id="btn-modal"
          className="btn"
          onClick={() => {
            const existingItem = state.cart.find(
              (item) => item.id === findgoods.id
            );
            if (existingItem) {
              handleOrderButtonClick2();
              console.log("장바구니에 같은 상품이 있습니다.");
            } else {
              dispatch(
                addItem({
                  id: findgoods.id,
                  name: findgoods.product_title,
                  price: findgoods.price,
                  count: 1,
                })
              );
              handleOrderButtonClick();
            }
          }}
        >
          주문하기
        </button>
        <div>
          {modalOpen && (
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
                    src={
                      process.env.PUBLIC_URL + "/goods_image/cart-panda2.png"
                    }
                  />
                </div>
                <div className="content">
                  <p className="content">
                    '{findgoods.product_title}' 가 장바구니에 추가되었어요.
                  </p>
                </div>
                <div className="btn-box">
                  <div
                    className="yes-btn"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    장바구니 보기
                  </div>
                  <div> / </div>
                  <div className="no-btn" onClick={closeModal}>
                    쇼핑 계속하기
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          {modalOpen2 && (
            <div
              id="modal"
              className="modal-overlay"
              onClick={existingButtonClick}
            >
              <div className="modal-window">
                <div className="title">
                  <h2>카트 담기</h2>
                </div>
                <div className="close-area" onClick={closeModal2}>
                  X
                </div>
                <div className="in-cart-box">
                  <img
                    className="in-cart-img"
                    src={process.env.PUBLIC_URL + "/goods_image/cart-panda.png"}
                  />
                </div>
                <div className="content">
                  <p className="content">이미 장바구니에 담긴 상품입니다.</p>
                </div>
                <div className="btn-box">
                  <div
                    className="yes-btn"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    장바구니 보기
                  </div>
                  <div> / </div>
                  <div className="no-btn" onClick={closeModal2}>
                    쇼핑 계속하기
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Goodsdetail;