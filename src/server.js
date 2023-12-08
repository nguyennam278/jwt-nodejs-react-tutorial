import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();
const app = express();

// config viewEngine
configViewEngine(app);

// init web route
initWebRoutes(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Nodejs is running on port", PORT);
});
