import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";

const router = express.Router();

const initApiWebRoutes = (app) => {
  router.get("/testapi", apiController.testapi);
  router.post("/register", apiController.handleRegister);

  return app.use("/api/v1/", router);
};
export default initApiWebRoutes;
