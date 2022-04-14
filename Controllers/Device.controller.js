const express = require("express");
let DeviceModel = require("../Model/Device.model");
class DeviceController {
  async createDevice(req, res) {
    try {
      const newDevice = new DeviceModel({
        name: "Light",
        auto: true,
        hourFrom: 7,
        hourTo: 10,
      });
      await newDevice.save();
      res.send({ success: true, device: newDevice });
    } catch (error) {
      console.log(error);
    }
    // const newDevice = new DeviceModel({
    //   name: "x",
    //   auto: False,
    //   hourFrom: 1,
    //   hourTo: 2,
    // });
    // await newDevice.save();
  }
  async getDevice(req, res) {
    try {
      const nameDevice = req.params.id;
      DeviceModel.findOne({ name: nameDevice }, function (err, DeviceModel) {
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
  async updateDevice(req, res) {
    try {
      console.log(req.body);
      const nameDevice = req.params.id;
      const { auto, hourFrom, hourTo } = req.body;

      let updateDevice = await DeviceModel.findOneAndUpdate(
        { name: nameDevice },
        {
          name: nameDevice,
          auto: auto,
          hourFrom: hourFrom,
          hourTo: hourTo,
        },
        { new: true }
      );
      if (!updateDevice) {
        res.status(401).json({ success: false, msg: "Device not found" });
      }
      res.send({
        success: true,
        device: updateDevice,
      });
    } catch (error) {
      console.log(error);
    }
  }
  test(req, res) {
    res.send({ succes: "cc" });
  }
}
module.exports = new DeviceController();
