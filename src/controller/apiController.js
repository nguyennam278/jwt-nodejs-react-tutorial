import register from "../service/register";

const testapi = (req, res) => {
  return res.status(200).json({
    message: "OK",
    data: "testAPI",
  });
};

const handleRegister = async (req, res) => {
  try {
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: "Missing requires parameters",
        EC: "1",
        DT: "",
      });
    }
    if (req.body.password && req.body.password.length < 7) {
      return res.status(200).json({
        EM: "Pass word must have more than 6 letters ",
        EC: "1",
        DT: "",
      });
    }

    // create new user
    let data = await register.register(req.body);

    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: "",
    });
  } catch (e) {
    return res.status(500).json({
      EM: "error from server",
      EC: "-1",
      DT: "",
    });
  }
};

const handleLogin = async (req, res) => {
  try {
    let data = await register.userLogin(req.body);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (e) {
    return res.status(500).json({
      EM: "error from server",
      EC: -1,
      DT: "",
    });
  }
};
module.exports = { testapi, handleRegister, handleLogin };
