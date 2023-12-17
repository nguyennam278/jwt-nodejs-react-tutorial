import express from "express";
import homeController from "../controller/homeController";
import apiController from "../controller/apiController";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHelloWorld);
  router.get("/users",  homeController.userPage);
  router.post("/users/create-user", homeController.handleCreateUser);
  router.post("/delete-user/:id", homeController.handleDeleteUser);
  router.get("/update-user/:id", homeController.UserUpdatePage);
  router.post("/users/update-user", homeController.handleUpdateUser);
  router.get("/testapi", apiController.testapi);

  return app.use("/", router);
};
export default initWebRoutes;
