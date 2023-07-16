const express = require("express");
const router = express.Router();
const controller = require("../controller/repleCtrl");

//경로: /reple
router.post("/submit", controller.submitReple); // 댓글 추가
router.get("/getReple/:id", controller.getReple); // 댓글 조회
router.post("/edit", controller.editReple); // 댓글 수정
router.post("/delete", controller.deleteReple); // 댓글 삭제


module.exports = router;
