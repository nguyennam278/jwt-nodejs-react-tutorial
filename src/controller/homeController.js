const handleHelloWorld = (req, res) => {
  const age = "20";
  return res.render("home.ejs");
};

const userPage = (req, res) => {
  return res.render("user.ejs");
};
module.exports = { handleHelloWorld, userPage };
