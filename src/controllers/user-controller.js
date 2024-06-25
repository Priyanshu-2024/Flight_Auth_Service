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

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      err: {},
      data: response,
      message: "User is authenticated and token is valid",
    });
  } catch (error) {
    return res.status(200).json({
      success: true,
      err: {},
      data: response,
      message: "something went wrong",
    });
  }
};

module.exports = {
  create,
  getById,
  destroy,
  signIn,
  isAuthenticated,
};
