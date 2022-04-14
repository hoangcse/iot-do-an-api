const express = require("express");
let DeviceModel = require("../Model/Device.model");
class DeviceController {
  async createDevice(req, res) {
    try {
      const newDevice = new DeviceModel({
        name: "x",
        auto: false,
        hourFrom: 1,
        hourTo: 2,
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
  test(req, res) {
    res.send({ succes: "cc" });
  }
}
module.exports = new DeviceController();
