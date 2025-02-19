const mongoose = require("mongoose");

const SpecialPriceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Productos",
    },
    specialPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "preciosEspecialesVargas92" }
);

module.exports = mongoose.model("preciosEspeciales", SpecialPriceSchema);
