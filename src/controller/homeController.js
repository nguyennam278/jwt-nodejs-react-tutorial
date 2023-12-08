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

  return res.send("User");
};
module.exports = { handleHelloWorld, userPage, handleCreateUser };
