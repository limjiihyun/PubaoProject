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
  console.log(req.body);
  const isExistEmail = await User.findOne({
    where: { email },
  });
  console.log("dfafds",isExistEmail);
  if (isExistEmail) {
    return res.send({ result: false, message: "이미 존재하는 이메일입니다." });
  } else {
    const saltRounds = 10;
    const hashedPw = await bcrypt.hash(password, saltRounds);
    console.log(hashedPw);
    try {
      const postsignup = await User.create({
        password: hashedPw,
        username,
        nickname,
        email,
      });
      res.send({ result: true, data: postsignup });
    } catch (error) {
      res.send({ result: false, data: error });
    }
  }
};

// 로그인 post
// exports.postLogin = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ where: { email } });
//   console.log(user.password);
//   const hashedPw = await bcrypt.hash(password, 10);
//   const check = await bcrypt.compare(hashedPw, user.password);

// 로그인 post
exports.postLogin = async (req, res) => {
  // const { email, password } = req.body;
  const email = req.body.Email;
  const password = req.body.PW;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    res.send({ result: false, data: "404" });
    return;
  }
  // console.log(user)
  // const hashedPw = await bcrypt.hash(password, 10);
  // console.log(hashedPw);
  // console.log(user.password);
  const check = await bcrypt.compare(password, user.password);

  // JWT 생성
  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  if (check) {
    const token = jwt.sign({ id: user.id }, secretKey);
    res.send({
      id: user.id,
      token,
      algorithm: "RS256",
      expiresIn: "10000h",
      result: true,
      userID: user.username,
      nickname: user.nickname
    });
  } else {
    res.send({ result: false, data: "404" });
  }
  //<클라이언트 코드>
  // 사용이 필요한 api - 로그인, 커뮤니티, 카트
  // 로그인(포함?)이후 발생하는 모든 요청 헤더에 토큰값을 담아서 요청(대부분의 API는 토큰 정보를 요구)
  // 웹소켓
  // 로그아웃
};




// 추후 작업으로 하는 걸로 합시다....
// jwt 인증(검증목적 토큰 디코딩)
exports.getUserInfo = async (req, res) => {
  console.log(req)
  const authorization = req.get("authorization");
  console.log("authorization", authorization);
  if (!authorization) {
    return res.status(300);
  }
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
exports.getUser = async (req, res) => {
  try {
    const { id } = req.query;
    await User.destroy({
      where: { id },
    });
    res.status(200).json({ message: "탈퇴 완료" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ errMessage: "탈퇴 실패" });
  }
};









