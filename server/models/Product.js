import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
        },
        price: {
            type: Number, 
            required: [true, "Price is required"],
            trim: true,
        },
        description:{
          type: String,
          default:"",
          trim:  true,
        },
        image: {
            type: String,
            required: [true, "Image is required"],
        },
    },
    {timestamps: true}
);

const Product = mongoose.model("Product", productSchema);
export default Product;