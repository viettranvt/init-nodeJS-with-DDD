// /src/infrastructure/config/inversify.config.js

const { Container } = require('inversify')
const {
  UserController,
} = require('../../interfaces/controllers/UserController')
const {
  UserRepository,
} = require('../../infrastructure/repositories/UserRepository')

const container = new Container()

// Bindings
container.bind(UserController).to(UserController)
container.bind(UserRepository).to(UserRepository)

module.exports = container
