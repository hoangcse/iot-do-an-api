const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Device = new Schema({
  name: {
    type: String,
    unique: true,
  },
  auto: {
    type: Boolean,
  },
  hourFrom: {
    type: Number,
  },
  hourTo: {
    type: Number,
  },
});

module.exports = mongoose.model("Device", Device, "Device");
