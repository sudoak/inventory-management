const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    sku: String,
    title: String,
    description: String,
    mrp: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
