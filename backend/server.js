require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet"); // For securing HTTP headers
const xss = require("xss-clean"); // Prevent XSS attacks
const rateLimit = require("express-rate-limit"); // Limit repeated requests
const mongoSanitize = require("express-mongo-sanitize"); // Prevent NoSQL injection

const authRoutes = require("./routes/auth"); // Authentication routes
const projectRoutes = require("./routes/projects"); // Project-related routes
const blogRoutes = require("./routes/blogs"); // Blog-related routes

const app = express();

// Security Middleware
app.use(helmet()); // Secure HTTP headers
app.use(xss()); // Prevent XSS attacks
app.use(mongoSanitize()); // Sanitize data against NoSQL injection
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors({ origin: ["http://localhost:5173"], credentials: true })); // Allow requests from frontend

// MongoDB Connection
const connectDB = async () => {
  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

};
connectDB();

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/projects", projectRoutes); // Project routes
app.use("/api/blogs", blogRoutes); // Blog routes

// Default Route
app.get("/api", (req, res) => {
  res.json({ message: "API is running..." });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An error occurred!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
