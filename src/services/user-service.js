const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in the service layer", error);
      throw error;
    }
  }

  async destroy(data) {
    try {
      const user = await this.userRepository.destroy(data);
      return user;
    } catch (error) {
      console.log("something went wrong in the service layer", error);
      throw error;
    }
  }
}

module.exports = UserService;
