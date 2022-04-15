const express = require("express");
const app = express();
var path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./configure.js");
const DeviceRoute = require("./Route/DeviceRoute.js");
const NotiRoute = require("./Route/NotiRoute.js");
mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database " + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/Home.html"));
});
app.use("/device", DeviceRoute);
app.use("/noti", NotiRoute);
app.listen(PORT, function () {
  // const port = app.address().port;
  console.log("Server is running on Port:", PORT);
});
// xx
