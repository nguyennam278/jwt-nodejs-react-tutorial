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
module.exports = {
  handleHelloWorld,
  userPage,
  handleCreateUser,
  handleDeleteUser,
};
