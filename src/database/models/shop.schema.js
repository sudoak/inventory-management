const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    name: String,
    gstin: String,
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shop", shopSchema);
