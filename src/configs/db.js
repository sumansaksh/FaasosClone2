const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://pankajkumar541:pk123@cluster0.oc3m3.mongodb.net/product-database");
};
