const User = require('../models/userModel');

class UserService {
  async createUser(userData) {
    return await User.create(userData);
  }

  async getAllUsers() {
    return await User.findAll();
  }

  async getUserById(id) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async updateUser(id, userData) {
    const user = await this.getUserById(id);
    return await user.update(userData);
  }

  async deleteUser(id) {
    const user = await this.getUserById(id);
    await user.destroy();
    return { message: 'User deleted successfully' };
  }
}

module.exports = new UserService();