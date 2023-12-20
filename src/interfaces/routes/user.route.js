// /src/interfaces/routes/UserRoute.js

const express = require('express')
const { injectable } = require('inversify')
const UserController = require('../controllers/UserController')
const ExampleUseCase = require('../../application/use-cases/ExampleUseCase')

@injectable()
class UserRoute {
  constructor(
    @inject(UserController) userController,
    @inject(ExampleUseCase) exampleUseCase
  ) {
    this.userController = userController
    this.exampleUseCase = exampleUseCase
    this.router = express.Router()
    this.initializeRoutes()
  }

  initializeRoutes() {
    this.router.get('/', (req, res, next) =>
      this.userController.getAllUsers(req, res, next)
    )
    this.router.get('/:id', (req, res, next) =>
      this.userController.getUserById(req, res, next)
    )
    this.router.post('/', (req, res, next) =>
      this.userController.createUser(req, res, next)
    )
    this.router.put('/:id', (req, res, next) =>
      this.userController.updateUser(req, res, next)
    )
    this.router.delete('/:id', (req, res, next) =>
      this.userController.deleteUser(req, res, next)
    )
  }
}

module.exports = UserRoute
