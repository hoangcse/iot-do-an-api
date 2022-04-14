require("dotenv").config();

module.exports = {
  DB:
    //"mongodb+srv://root:0MKmrFE6ygcu2HGA@cluster0-njlqc.mongodb.net/shopping_cart"
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@iot-do-an.ao3bd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,

  // JWT_SECRET: "F9qy&s)?4=33s%$2h#F~",
};
