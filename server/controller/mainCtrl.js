const model = require("../models");
const { Op } = require("sequelize");
const { Home } = require("../models");

// 홈화면 조회
exports.getHome = async(req, res) => {
  try {
    const home = await Home.findAll();
    console.log(home)
    res.send({ result: true, data: home });
  } catch (error) {
    res.send({ result: false, data: error });
    console.log('error')
  }
};
