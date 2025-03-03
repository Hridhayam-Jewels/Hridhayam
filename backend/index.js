import cors from "cors";
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "./config/mongoose.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cookieParser from "cookie-parser";
import cartRouter from "./routes/cartRoutes.js";
import adminRouter from "./routes/adminRoute.js";
import contactRouter from "./routes/contactRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

const server = express();
const PORT = process.env.PORT || 3000;
server.use(cookieParser());
server.use(express.json());

server.use(
  cors({
    origin: "https://hridhayam.in",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    exposedHeaders: ["set-cookie"],
  })
);

server.use("/user", userRouter);
server.use("/product", productRouter);
server.use("/cart", cartRouter);
server.use("/admin", adminRouter);
server.use("/contact", contactRouter);
server.use("/order", orderRouter);

// const storage  = multer.diskStorage({
connectDB();
connectCloudinary();
console.log("Connected to MongoDB and Cloudinary");
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
