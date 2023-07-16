const express = require("express");
const router = express.Router();
const controller = require("../controller/commuCtrl");
const { Community } = require("../models");

// 경로: /community
router.get("/", controller.getCommunity); // 커뮤니티 전체 조회
router.get("/detail/rankingimage", controller.getRankingImage); // 랭키이미지 조회
router.get("/detail/:id", controller.getCommunitySeg); // 커뮤니티 상세 조회
router.post("/lounge", controller.postCommunity); // 게시글 작성
router.patch("/lounge/:id", controller.patchCommunity); // 게시글 수정
router.delete("/lounge/:id", controller.deleteCommunity); // 게시글 삭제
router.post("/lounge/image/upload", controller.postUpload); // 이미지 처리

module.exports = router;
