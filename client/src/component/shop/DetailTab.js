import { useParams } from "react-router-dom";
import "../Detail.css";
import React, { useState } from "react";
function DetailTab(props) {
  let [tab, settab] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Product Details");
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  let displayText = "";
  if (selectedTab === "Product Details") {
    displayText = (
      <div className="tab-text">
        배송 방법 : 택배 <br />
        배송 지역 : 전국지역 <br />
        배송 비용 : 3,000 won <br />
        배송 기간 : 2일 ~ 7일 <br />
        배송 안내 : <br />
        1. 2일 ~ 7일의 배송 기간은 영업일 기준, 주말 및 공휴일을 제외한
        기간입니다. <br />
        2. 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가
        있습니다. <br />
        3. 고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만,
        상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.
      </div>
    );
  } else if (selectedTab === "Shipping & Return Policy") {
    displayText = (
      <>
        <div className="tab-text">
          온라인 스토어 반품 정책 <p />
          <br />
          제품이 마음에 들지 않아서 반품을 생각하고 계신다면 안심하세요. foubao
          온라인 스토어에서 구매한 제품은 수령일로부터 30일 이내에 반품 신청할
          수 있어요.  <br />반품 신청 전에 제품 택이 부착되어 있는지, 착용 및 세탁하지
          않은 상태인지 다시 한 번 체크해주세요.
          <br />
          반품 방법 1. 제품을 받은 날로부터 30일 이내에
          이메일(fuobao.kr@cute.com) 또는 전화(070.1234.4321)로 반품 의사를
          남겨주세요. 주문번호(ex. KR00123456)/성함/반품할 제품 목록을 함께
          알려주시면 빠른 처리가 가능해요. <br />
          <br />
          2. 반품이 접수되면 CJ대한통운 기사님이 연락 후 제품 수거를 진행합니다.
          제품을 포장하신 후 CJ대한통운 기사님께 전달해주세요. <br />
          <br /> 3. 제품이 회수되면 검수 절차를 거쳐 환불이 진행됩니다. 환불
          시에는 환불 완료 확인 이메일을 발송해드리며, 환불 처리에 영업일
          7일-10일가량 소요될 수 있음을 참고해주세요. (거래은행 혹은 카드사마다
          취소 기간 상이) *fuobao 반품 규정에 의거한 반품이 어려운 경우
          이메일으로 알려 드립니다. *CJ대한통운이 아닌 타 택배사를 통하여
          반품하는 경우 선불 택배만 가능하며, 착불 택배의 경우 반송될 수
          있습니다. 또한, 제품 훼손 및 분실은 도움을 드릴 수 없음을
          참고해주세요.
          <br />
          <br />
        </div>
      </>
    );
  } else if (selectedTab === "Sales proceeds") {
    displayText = (
      <div className="tab-text">
        고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다.
        확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이
        아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다. <br />
        무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운
        은행에서 직접 입금하시면 됩니다. 주문시 입력한 입금자명과 실제입금자의
        성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지
        않은 주문은 자동취소 됩니다.
        <br />
        <br />
      </div>
    );
  }
  return (
    <div>
      <nav>
        <div className="tab-box">
          <div
            className={`tab-box-inner ${
              selectedTab === "Product Details" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Product Details")}
          >
            배송정보
          </div>
          <div
            className={`tab-box-inner ${
              selectedTab === "Shipping & Return Policy" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Shipping & Return Policy")}
          >
            반품 정책
          </div>
          <div
            className={`tab-box-inner ${
              selectedTab === "Sales proceeds" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Sales proceeds")}
          >
            상품결제정보
          </div>
        </div>
      </nav>
      <div className="tab-text">{displayText}</div>
    </div>
  );
}
export default DetailTab;