import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import initApiWebRoutes from "./routes/api";
import bodyParser from "body-parser";
import connection from "./config/connectDB";
import cors from "./config/cors";
require("dotenv").config();
const app = express();

// config viewEngine
configViewEngine(app);
const PORT = process.env.PORT || 8000;

cors(app);

//config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// test connect to DB
connection();
// init web route
initWebRoutes(app);
initApiWebRoutes(app);

app.listen(PORT, () => {
  console.log("Nodejs is running on port", PORT);
});
