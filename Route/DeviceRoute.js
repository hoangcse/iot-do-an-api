const express = require("express");
const DeviceRoute = express.Router();
const DeviceController = require("../Controllers/Device.Controller.js");

// DeviceRoute.post("/", DeviceController.createDevice);
DeviceRoute.get("/:id", DeviceController.getDevice);
DeviceRoute.put("/:id", DeviceController.updateDevice);

module.exports = DeviceRoute;
