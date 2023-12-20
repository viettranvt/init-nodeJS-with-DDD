// /src/interfaces/controllers/UserController.js

const { inject, injectable } = require('inversify')
const ExampleUseCase = require('../../application/use-cases/ExampleUseCase')

@injectable()
class UserController {
  constructor(@inject(ExampleUseCase) exampleUseCase, userUseCase) {
    this.userUseCase = userUseCase
    this.exampleUseCase = exampleUseCase
  }

  async getAllUsers(req, res, next) {
    const length = req.params.length || 10
    const randomString = this.exampleUseCase.generateRandomString(length)
    res.json({ randomString })
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
