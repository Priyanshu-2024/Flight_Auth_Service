const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: response,
      message: "User created",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "User not created",
      success: false,
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userService.destroy({});
    return res.status(201).json({
      data: response,
      message: "User created",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "User not created",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
};
