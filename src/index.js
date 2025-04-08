import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(cookieParser()); // Parse cookies
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", // Use CORS_ORIGIN from .env, or allow all origins
    credentials: true, // Allow cookies to be sent with requests
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the FinAi Backend!");
});

// Example API route
app.get("/api/example", (req, res) => {
  res.json({ message: "This is an example API route." });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
