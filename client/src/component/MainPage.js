import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import About from '../component/Main/About'
import Home from '../component/Main/Home'
// import Map from '../component/Main/Map'
import Main from '../component/Main/Main'


const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 1500,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, [location]);

  return (
    <>
      <Element name="main" >
        <Main />
      </Element>
      <Element name="introduce" >
        <About />
      </Element>
      <Element name="today_ranking">
        <Home/>
      </Element>
      {/* <Element name="location_map">
        <Map />
      </Element> */}
    </>
  );
};

export default MainPage;
