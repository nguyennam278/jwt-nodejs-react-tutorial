import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt); // hashPassword
  return hashPassword;
};

const checkEmailExist = async (userEmail) => {
  let user = await db.User.findOne({
    where: {
      email: userEmail,
    },
  });

  if (user) {
    return true;
  }

  return false;
};

const checkPhoneExist = async (userPhone) => {
  let user = await db.User.findOne({
    where: {
      phone: userPhone,
    },
  });

  if (user) {
    return true;
  }

  return false;
};

const register = async (userData) => {
  try {
    // check email exist
    let isEmailExit = await checkEmailExist(userData.email);
    if (isEmailExit === true) {
      return {
        EM: "The email is existed",
        EC: "1",
      };
    }

    // check phone number exist
    let isPhoneExit = await checkPhoneExist(userData.phone);
    if (isPhoneExit === true) {
      return {
        EM: "The phone number is existed",
        EC: "1",
      };
    }

    // hash password

    let hashpassword = hashUserPassword(userData.password);

    // create a new user

    await db.User.create({
      email: userData.email,
      username: userData.username,
      phone: userData.phone,
      password: hashpassword,
    });

    return {
      EM: "Created a user successfully",
      EC: 0,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something Wrong",
      EC: -2,
    };
  }
};

module.exports = { register };
