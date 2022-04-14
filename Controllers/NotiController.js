const express = require("express");
let NotiModel = require("../Model/NotiModel");
class NotiController {
  async createNoti(req, res) {
    try {
      const { content, date } = req.body;
      const newNoti = new NotiModel({
        content: content,
        date: date || new Date(),
      });
      await newNoti.save();
      res.send({ success: true, noti: newNoti });
    } catch (error) {
      console.log(error);
    }
  }
  async getNoti(req, res) {
    try {
      //   const nameDevice = req.params.id;
      NotiModel.find(function (err, DeviceModel) {
        if (err) {
          console.log(err);
        } else {
          // console.log(typeof account);
          res.json(DeviceModel);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteNoti(req, res) {
    try {
      const idNoti = req.params.id;
      await NotiModel.deleteOne({ id: idNoti });
      res.send({ success: "delete done" });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new NotiController();
