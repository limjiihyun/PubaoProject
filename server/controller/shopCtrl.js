const model = require("../models");
const { Op } = require("sequelize");
const { Shop } = require("../models");

// 상품 목록 조회
exports.getShop = async (req, res) => {
  try {
    const shop = await Shop.findAll();
    res.send({ result: true, data: shop });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 상품 세부 조회
exports.getShopSeg = async (req, res) => {
  try {
    const shopSeg = await Shop.findOne({
      attribute: ["product_img", "product_title", "price", "content"],
    });
    res.send({ result: true, data: shopSeg });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 상품 세부 조회
exports.getShopSeg = async (req, res) => {
  try {
    const shopSeg = await Shop.findOne({
      where: { id },
    });
    console.log(shopSeg);
    res.send({ result: true, data: shopSeg });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
//상품 카트담기
