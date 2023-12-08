import mysql from "mysql2";

// create a connection to database

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const userPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // query to database

  connection.query(
    `INSERT INTO users (email, password, username) VALUES (?,?,?)`,
    [email, password, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
  return res.send("User");
};
module.exports = { handleHelloWorld, userPage, handleCreateUser };
