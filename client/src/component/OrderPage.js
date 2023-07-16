import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./OrderPage.css";
import { useState, useEffect, useParams } from "react";
import { useNavigate } from "react-router-dom";
import { addCount, downCount, deleteGoods } from "../cartstore";
export default function OrderPage(props) {
  let navigate = useNavigate();
  let state = useSelector((state) => state);
  console.log(state.cart[0].name);
  let dispatch = useDispatch();
  console.log(state.cart.length);
  let total = [0];
  let a = 1;
  for (a = 1; a < state.cart.length; a++) {
    let b = state.cart[a].price * state.cart[a].count;
    total.push(b);
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
  return (
    <>
      <div className="cart-logo">주문해주셔서 감사합니다!</div>
      <div className="table-box-main">
        <>
          {state.cart.length === -1 ? (
            <>
              <div className="empty-text">장바구니에 상품이 없습니다!</div>
              {/* <img
                className="card-img"
                src={process.env.PUBLIC_URL + "goods_image/sad-pubao2.png"}
                width="80%"
              /> */}
            </>
          ) : (
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
                    {/* <div>{state.cart[i].id}</div> */}
                    <div> {state.cart[i].name}</div>
                    <div>가격: {state.cart[i].price}</div>
                    <div>수량: {state.cart[i].count}개</div>
                    <div></div>
                    <div></div>
                  </div>
                </>
              ) : (
                <>
                  <div className="order-btn-box">
                    <div className="price-total">
                      상품 구매 금액: {sum} + 배송비 3,000=합계: {real_total}
                    </div>
                  </div>
                </>
              )
            )
          )}
        </>
      </div>
      <div className="form-box">
        <form className="address-main-box">
          <table className="table-border">
            <tr className="table-tr">
              <th className="table-th">주문하시는 분:</th>
              <td>
                <input type="text" name="name" />
              </td>
            </tr>
          </table>
          <table className="table-border">
            <tr className="table-tr">
              <th className="table-th">이메일:</th>
              <td>
                <input type="email" name="email" />
              </td>
            </tr>
          </table>
          <table className="table-border">
            <tr className="table-tr">
              <th className="table-th">휴대전화:</th>
              <td>
                <input type="tel" name="phone" />
              </td>
            </tr>
          </table>
          <table className="table-border">
            <tr className="table-tr">
              <th className="table-th">주소:</th>
              <td>
                <textarea name="address" rows="4" cols="30"></textarea>
              </td>
            </tr>
          </table>
          <table className="table-border2">
            <tr className="table-tr">
              <th className="table-th">결제:</th>
              <td>
                <select name="paymentMethod">
                  <option value="creditCard">Credit Card</option>
                  <option value="debitCard">Debit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </td>
            </tr>
          </table>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      {/* <div className="address-main-box">
        <div className="adress-text-box">주문하시는 분</div>
        <div>
          <div>주소 <input></input></div>
          <div>일반전화<input></input></div>
          <div>휴대전화<input></input></div>
          <div>이메일<input></input></div>
        </div>
      </div> */}
    </>
  );
}