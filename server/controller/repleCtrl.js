const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Community, User, Reple } = require("../models");


exports.submitReple = async (req, res) => {
  console.log(req.body)
  try {
    const { reple, postId, nickname, detailnum } = req.body;
   // console.log("Received data:", { reple, postId });

    const myreple = await Reple.create({
      reple,
      nickname: nickname,
      detailnum: detailnum
    });


    console.log("Created reple:", myreple);
    res.json({ success: true, data: myreple });

    const userInfo = await User.findOne({ where: { nickname: nickname } });
    console.log("User info:", userInfo);
    if (!userInfo || Object.keys(userInfo).length === 0) {
      return res.status(400).json({ success: false });
    }

    // const newReple = Reple.build({ nickname: userInfo.nickname, reple });
    // await newReple.save();

    const post = await Community.findOne({ where: { id: detailnum } });
    console.log("dsaaf", detailnum);
    if (!post) {
      return res.status(400).json({ success: false });
    }

    await post.increment("repleNum");

  } catch (error) {
    console.log("Error:", error);
    return res.status(400).json({ success: false, error: "Server error" });
  }
  };


  exports.getReple = async (req, res) => {
    try {
      const { id } = req.params; 
      console.log("fdafda", id);
      const repleList = await Reple.findAll({
        where: {
          detailnum: id, 
        },
      });
      res.send({ result: true, success: true, data: repleList });
    } catch (error) {
      res.send({ result: false, success: false, data: error });
    }
  };


  exports.editReple = async (req, res) => {
    const { id, nickname, reple } = req.body;
    console.log("edit", req.body);
    try {
      const editreple = await Reple.update(
        {
          nickname,
          reple,
        },
        {
          where: {
            id: id
          },
        }
      );
      res.send({ result: true, data: editreple });
    } catch (error) {
      res.send({ result: false, data: error });
    }
  };


  exports.deleteReple = async (req, res) => {
    const { id, nickname} = req.body;
    console.log(req.body);
    try {
      const deleteReple = await Reple.destroy({
        where: {
          id: id,
        }
      });
  
      const post = await Community.findOne({ where: { nickname: nickname } });
      if (!post) {
        return res.status(400).json({ success: false });
      }
  
      await post.increment("repleNum", { by: -1 });
  
      res.send({ result: true, data: deleteReple });
    } catch (error) {
      res.send({ result: false, data: error });
    }
  };
  