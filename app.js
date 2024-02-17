const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routes/section");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All route is working fine",
  });
});

app.use("/api/v1", routes);

module.exports = { app };
