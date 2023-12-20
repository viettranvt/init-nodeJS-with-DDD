// /src/interfaces/controllers/UserController.js

const { inject, injectable } = require('inversify')

@injectable()
class UserController {
  constructor(userUseCase) {
    this.userUseCase = userUseCase
  }

  async getAllUsers(req, res, next) {
    // Implement logic to get all users
  }

  async getUserById(req, res, next) {
    // Implement logic to get a user by ID
  }

  async createUser(req, res, next) {
    // Implement logic to create a user
  }

  async updateUser(req, res, next) {
    // Implement logic to update a user
  }

  async deleteUser(req, res, next) {
    // Implement logic to delete a user
  }
}

module.exports = UserController
