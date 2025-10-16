import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"; // 👈 1. Import for ES Modules
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

// --- 2. Correctly Define __dirname for ES Modules ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ---

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Allows parsing JSON data from the request req.body

// --- 3. Define all your API routes first ---
app.use("/api/products", productRoutes);

// --- 4. Serve Frontend in Production Mode ---
if (process.env.NODE_ENV === "PRODUCTION") {
  // 5. Use "../" to step up from the 'backend' folder to the 'project-root'
  const frontendPath = path.join(__dirname, "../frontend/dist");

  // Serve static assets (CSS, JS, images, etc.)
  app.use(express.static(frontendPath));

  // Catch-all route: For any request not handled by the API, send the frontend's index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
  });
}

app.listen(PORT, () => {
  // Ensure connectDB is called only once after the server starts listening
  connectDB();
  console.log(`Sever started at http://localhost:${PORT}`);
});
