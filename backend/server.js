const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const notes = require("./data/notes");
const connectDB = require("./config/db");
const path = require("path");
connectDB();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

// app.get("/", (req, res) => {
//   res.send("Good Morning API running...........");
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// ===========deployment======================

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// ===========deployment======================

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(5000, () => console.log(`server ${PORT} is listening`));
