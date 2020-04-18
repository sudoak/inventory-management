const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    sku: String,
    title: String,
    description: String,
    mrp: Number,
    shops: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop"
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
