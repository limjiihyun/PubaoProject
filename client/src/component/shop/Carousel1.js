import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrow: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              className="main-bg"
              src={process.env.PUBLIC_URL + "/goods_image/c1.jpg"}
            />
          </div>
          <div>
            <img
              className="main-bg"
              src={process.env.PUBLIC_URL + "/goods_image/c2.jpg"}
            />
          </div>
          <div>
            <img
              className="main-bg"
              src={process.env.PUBLIC_URL + "/goods_image/c3.jpg"}
            />
          </div>
          <div>
            <img
              className="main-bg"
              src={process.env.PUBLIC_URL + "/goods_image/c4.jpg"}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={process.env.PUBLIC_URL + "/goods_image/cright.png"}
      className="next-btn"
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={process.env.PUBLIC_URL + "/goods_image/cleft.png"}
      className="next-btn2"
      onClick={onClick}
    />
  );
}