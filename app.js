require("dotenv").config();
require("express-async-errors");

//express
const express = require("express");
const app = express();

//extra packages/security packages
const cors = require("cors");
const sequelize = require("./db/database");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

//db
require("./models/User");
require("./models/Product");

//middleware
const authRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//routes
app.use(bodyParser.json({ limit: "600kb" }));
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

//port
const port = process.env.PORT || 4000;

//initialize server
const start = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

start();
