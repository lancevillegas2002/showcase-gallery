import "dotenv/config";
import express from "express"
import cors from "cors";
import connecctDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "50mb"}));

app.get("/", (req, res) => {
    res.json({message: "Showcase API is running!"});
});

app.use("/api/products", productRoutes);

connecctDB().then(()=> {
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))
});