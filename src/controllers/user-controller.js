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

const signIn = async (req, res) => {
  try {
    const response = await userService.SignIn(
      req.body.email,
      req.body.password
    );
    return res.status(201).json({
      data: response,
      message: "User loggedin",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "User not loggedin",
      success: false,
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userService.destroy(req.params.id);
    return res.status(201).json({
      data: response,
      message: "User deleted",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "User not deleted",
      success: false,
      err: error,
    });
  }
};

const getById = async (req, res) => {
  try {
    const response = await userService.getById(req.params.id);
    return res.status(201).json({
      data: response,
      message: "User Fetched",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "User not Fetched",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
  getById,
  destroy,
  signIn,
};
