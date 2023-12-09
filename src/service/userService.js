import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt); // hashPassword
  return hashPassword;
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);

  try {
    await db.User.create({
      email: email,
      password: hashPass,
      username: username,
    });
  } catch (error) {}
};
const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "Delete from users where id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};
const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "Select * from users where id=?",
      [id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      "UPDATE users SET email=? ,username=? WHERE id=?",
      [email, username, id]
    );
    return rows;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUser,
};
