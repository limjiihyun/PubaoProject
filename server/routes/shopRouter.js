const express = require("express");
const router = express.Router();
const controller = require("../controller/shopCtrl");
//경로: /shop
router.get("/", controller.getShop); // 상품 목록 조회
// router.get("/detail", controller.getShopSeg); // 상품 세부 조회
router.get("/detail/:id", controller.getShopSeg); // 상품 세부 조회
module.exports = router;