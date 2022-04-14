const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Noti = new Schema({
  content: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Noti", Noti, "Noti");
