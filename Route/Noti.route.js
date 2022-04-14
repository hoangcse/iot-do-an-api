const express = require("express");
const NotiRoute = express.Router();
const NotiController = require("../Controllers/Noti.Controller");

NotiRoute.post("/", NotiController.createNoti);
NotiRoute.get("/", NotiController.getNoti);
NotiRoute.delete("/:id", NotiController.deleteNoti);

module.exports = NotiRoute;
