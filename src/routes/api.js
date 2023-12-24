import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";
import userController from "../controller/userController";
import groupController from "../controller/groupController";
const router = express.Router();

const initApiWebRoutes = (app) => {
  router.get("/testapi", apiController.testapi);
  router.post("/register", apiController.handleRegister);
  router.post("/login", apiController.handleLogin);

  router.get("/user/read", userController.readFunc);
  router.post("/user/create", userController.createFunc);
  router.put("/user/update", userController.updateFunc);
  router.delete("/user/delete", userController.deleteFunc);

  router.get("/group/read", groupController.readFunc);
  return app.use("/api/v1/", router);
};
export default initApiWebRoutes;
