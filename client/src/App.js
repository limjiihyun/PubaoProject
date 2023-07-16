import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, clearUser } from './Reducer/userSlice';
import Heading from './component/Heading';
import Community from './component/community/Community';
import MainPage from './component/MainPage';
import Login from './component/user/Login';
import Signup from './component/user/Signup';
import Footer from './component/Footer';
import ShopPage from './component/ShopPage';
import GoodsDetailPage from './component/GoodsDetailPage';
import CartPage from './component/CartPage';
import Edit from './component/community/Edit';
import PostArea from './component/community/PostArea';
import OrderPage from "./component/OrderPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem('login');
    if (storedData) {
      const { userId, token, nickname } = JSON.parse(storedData);
      if (userId !== null) {
        dispatch(loginUser({ userId: userId, token: token, nickname: nickname }));
      } else {
        dispatch(clearUser());
      }
    }
  }, [dispatch]);

  return (
    <>
      <Heading home="Home" />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/detail/:id" element={<GoodsDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/community/detail/:postNum" element={<PostArea />} />
        <Route path="/Edit/:postNum" element={<Edit />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;