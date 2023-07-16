import axios from "axios";
const apis = axios.create({
  baseURL: "https://port-0-pobao-final-kvmh2mlk0fjuq5.sel4.cloudtype.app",
});
apis.interceptors.request.use((config) => {
  const token = localStorage.getItem("login");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
export default apis;

controller>userCtrl
const model = require("../models");
const { Op } = require("sequelize");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const fs = require("fs");
// const privateKey = fs.readFileSync("private.key");
const secretKey = require("../config/jwt");
const bcrypt = require("bcrypt");
// 회원가입 페이지 조회
exports.getSignup = async (req, res) => {
  try {
    const singup = await User.findAll();
    res.send({ result: true, data: singup });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 로그인 페이지 조회
exports.getLogin = async (req, res) => {
  try {
    const login = await User.findAll({
      attribute: [email, password],
    });
    res.send({ result: true, data: login });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 장바구니 목록 조회
exports.getCart = async (req, res) => {
  try {
    const cart = await User.findAll();
    res.send({ result: true, data: cart });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 회원가입 post
exports.postSignup = async (req, res) => {
  const { id, password, username, nickname, email } = req.body;
  const saltRounds = 10;
  const hashedPw = await bcrypt.hash(password, saltRounds);
  console.log(hashedPw);
  try {
    const postsignup = await User.create({
      id,
      password: hashedPw,
      username,
      nickname,
      email,
    });
    res.send({ result: true, data: postsignup });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 로그인 post
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  // const email = req.body.Email;
  // const password = req.body.PW;
  // console.log(email);
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(400);
  }
  // console.log(email);
  const hashedPw = await bcrypt.hash(password, 10);
  const check = await bcrypt.compare(password, user.dataValues.password);
  // JWT 생성
  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  if (check) {
    const token = jwt.sign({ id: user.id }, secretKey);
    console.log(token);
    res.cookie("session", token, { maxAge: 604800, httpOnly: true });
    res.send({
      id: user.id,
      token,
      algorithm: "RS256",
      expiresIn: "10000h",
    });
  } else {
    return res.send({ result: false, data: "400", status: 400 });
  }
};
exports.getUserInfo = async (req, res) => {
  const authorization = req.get("authorization");
  if (!authorization) {
    return res.status(300);
  }
  // jwt 인증(검증목적 토큰 디코딩)
  const token = authorization.split("Bearer ")[1];
  function verifyToken(token, secretKey) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }
  const decoedToken = await verifyToken(token, secretKey);
  const { id } = decoedToken;
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return res.status(400);
  }
  return res.send({ user });
  // req에서 쿠키를 꺼내온다.
  // cookie로 session을 조회한다.
  // 맞는 유저가 있으면 리턴해준다.
};
// exports.postsign = async (req, res) => {
//   const verified = jwt.verify(token, secretKey);
//   console.log(verified);
// } else {
//   res.send({ result: false, data: "404" });
// };