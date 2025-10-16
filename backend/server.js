import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows to parse JSON data from the request req.body
//connectDB();

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Sever started at http://localhost:" + PORT);
});
