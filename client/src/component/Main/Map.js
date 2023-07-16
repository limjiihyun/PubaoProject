import React, { useEffect } from "react";
import styled from "styled-components";
import "./map.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsFillBusFrontFill } from "react-icons/bs";
const MapContainer = styled.div`
  height: 550px;
  width: 100%;
  margin: 0 auto;
`;
// const DetailContainer = styled.div`
//   display: flex;
//   justify-content: start;
//   align-items: start;
//   color: white;
//   width: 50%;
//   background: rgba(0, 0, 0, 0.8);
// `;
const Map = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.293014, 127.202828),
      level: 3,
      mapTypeId: window.kakao.maps.MapTypeId.DARK,
    };
    const map = new window.kakao.maps.Map(container, options);
    const markerPositions = [
      { lat: 37.293014, lng: 127.202828 },
      // Add more marker positions here
      // { lat: ..., lng: ... },
      // { lat: ..., lng: ... },
    ];
    markerPositions.forEach((position) => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(position.lat, position.lng),
      });
      marker.setMap(map);
      window.kakao.maps.event.addListener(marker, "click", () => {
        const infoWindow = new window.kakao.maps.InfoWindow({
          content: "푸바오 집",
        });
        infoWindow.open(map, marker);
      });
    });
  }, []);
  return (
    <MapContainer>
      <div style={{ display: "flex" }}>
        <div id="map" style={{ width: "50%", height: "550px" }}></div>
        {/* <DetailContainer> */}
        <div className="descriptionDiv">
          <div className="description">
            {/* 위치 아이콘 */}
            <IoLocationOutline className="icons" />
            <div className="mainTitle">위치</div>
            <br />
            <div className="mainContent">
              경기도 용인시 처인구 포곡읍 에버랜드로 199 판다월드
            </div>
          </div>
          <div className="description mainLine">
            <BsFillBusFrontFill className="icons" />
            <div className="mainTitle">오시는길</div>
            <br />
            <div className="mainContent">
              서울 - 5002번, 5700번, 1500-2번, 1113번
              <br /> <br />
              인천, 경기도 - 8862번, 8839번, 66번, 66-4번, 670번
              <br />
            </div>
          </div>
          <div className="description">
            <IoInformationCircleOutline className="icons" />
            <div className="mainTitle"> 정보</div>
            <br />
            <div className="mainContent">
              입장료 / 가격 : 에버랜드 입장시 무료
              <br /> <br />
              판다월드 운영시간 : 10:20 ~ 17:00
            </div>
          </div>
        </div>
        {/* </DetailContainer> */}
      </div>
    </MapContainer>
  );
};
export default Map;