import db from "../models/index";

const getAllUser = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "username", "email", "phone", "sex"],
      // include: { model: db.Group, attributes: ["name", "description"] },
    });

    if (users) {
      return {
        EM: "get data success",
        EC: 0,
        DT: users,
      };
    } else {
      return {
        EM: "get data success",
        EC: 0,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrong with services",
      EC: 1,
      DT: [],
    };
  }
};

const getUserPaginate = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;
    let { count, rows } = await db.User.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "username", "email", "phone", "sex"],
      // include: { model: db.Group, attributes: ["name", "description"] },
    });

    let data = {
      totalRows: count,
      totalPages: Math.ceil(count / limit),
      users: rows,
    };

    return {
      EM: "get data success",
      EC: 0,
      DT: data,
    };
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrong with services",
      EC: 1,
      DT: [],
    };
  }
};

const createUser = async () => {
  try {
    await db.User.create({});
  } catch (error) {
    console.log(error);
  }
};

const updatelUser = async (data) => {
  try {
    let user = await db.User.findOne({
      where: {
        id: data.id,
      },
    });

    if (user) {
      //update
      user.save({});
    } else {
      //Not found
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  try {
    let user = await db.User.findOne({
      where: { id: id },
    });

    if (user) {
      await user.destroy();
      return {
        EM: "Delete Success!!!",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "User not exsit",
        EC: 2,
        DT: [],
      };
    }
  } catch (error) {
    console.log(error);
    return {
      EM: "Something wrong with services",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  getAllUser,
  createUser,
  updatelUser,
  deleteUser,
  getUserPaginate,
};
