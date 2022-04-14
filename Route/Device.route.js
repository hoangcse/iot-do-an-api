const express = require("express");
const DeviceRoute = express.Router();
const DeviceController = require("../Controllers/Device.Controller");

DeviceRoute.post("/", DeviceController.createDevice);
DeviceRoute.get("/", DeviceController.test);

module.exports = DeviceRoute;
