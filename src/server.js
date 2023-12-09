import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
require("dotenv").config();
const app = express();

// config viewEngine
configViewEngine(app);

//config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test connect to DB
connection();
// init web route
initWebRoutes(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Nodejs is running on port", PORT);
});
