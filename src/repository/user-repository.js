const { where } = require("sequelize");
const { User, Role } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong on repository Layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong on repository Layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id", "password"],
      });
      return user;
    } catch (error) {
      console.log("Something went wrong on repository Layer");
      throw error;
    }
  }

  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      console.log("Something went wrong on repository Layer");
      throw error;
    }
  }

  async isAdmin(UserId) {
    try {
      const user = await User.findByPk(UserId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      const result = await user.hasRole(adminRole);
      console.log(result);
      return result;
    } catch (error) {
      console.log("Something went wrong on repository Layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
