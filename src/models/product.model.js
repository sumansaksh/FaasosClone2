const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    category: { type: String, required: true },

    name: { type: String, required: true },

    rating: { type: Number, required: true },

    type: { type: String, required: true },

    price: { type: Number, required: true },
    
    description: { type: String, required: true },

    tags: [{ type: Number, required: true }],

    
    img: [{ type: String, required: false }],

    reviews: { type: Number, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", productSchema);
