import userService from "../service/userService";

// render view homepage
const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

// render view userPage
const userPage = async (req, res) => {
  let userList = await userService.getUserList();
  return res.render("user.ejs", { userList });
};

const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // query to database
  userService.createNewUser(email, password, username);

  return res.redirect("/users");
};
const handleDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/users");
};
const UserUpdatePage = async (req, res) => {
  let id = req.params.id;
  let user = await userService.getUserById(id);
  let userData = {};
  userData = user;
  // if (user && user.length > 0) {
  //   userData = user[0];
  // }
  return res.render("updateUser.ejs", { userData });
};
const handleUpdateUser = async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let id = req.body.id;
  await userService.updateUser(email, username, id);
  return res.redirect("/users");
};
module.exports = {
  handleHelloWorld,
  userPage,
  handleCreateUser,
  handleDeleteUser,
  UserUpdatePage,
  handleUpdateUser,
};
