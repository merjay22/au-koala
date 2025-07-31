import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import authRoutes from "./Routes/authRoutes.js";
import User from "./user.js";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Custom Logger (test if middleware works)
app.use((req, res, next) => {
  console.log(`[CUSTOM LOG] ${req.method} ${req.url}`);
  next();
});

// ✅ Morgan Logging (Console + File)
const accessLogStream = fs.createWriteStream(
  path.join(process.cwd(), "access.log"),
  { flags: "a" }
);
app.use(morgan("dev")); // logs to terminal
app.use(morgan("combined", { stream: accessLogStream })); // logs to access.log

// ✅ Auth Middleware
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(401).json({ error: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// ✅ Admin-only Middleware
const adminOnly = (req, res, next) => {
  if (!req.user?.isAdmin) return res.status(403).json({ error: "Admins only" });
  next();
};

// ✅ Routes
app.use("/api", authRoutes);

app.get("/", (req, res) => res.send("🚀 API is running."));
app.get("/test", (req, res) => res.send("✅ Morgan test route hit!"));

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});

app.get("/api/admin/ping", authMiddleware, adminOnly, (req, res) => {
  res.json({ message: "Hello Admin 👋" });
});

app.get("/api/admin/users", authMiddleware, adminOnly, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

// ✅ DB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
