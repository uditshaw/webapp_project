const express = require("express");
const auth = require("./routes/Auth");
const event = require("./routes/Events");
const user = require("./routes/User");
const search = require("./routes/Search");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const corsOptions = {
  //To allow requests from client
  origin: ["http://localhost:3000", "http://127.0.0.1"],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};
app.use(express.json());
app.use(cors(corsOptions));
app.options("*", cors());
app.use("/uploads", express.static("./uploads"));
app.use(cookieParser());
app.use("/api/v1/users", auth);
app.use("/api/v1/events", event);
app.use("/api/v1/userData", user);
app.use("/api/v1/search", search);

module.exports = app;
