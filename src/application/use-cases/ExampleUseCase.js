// /src/application/use-cases/ExampleUseCase.js

const { inject } = require('inversify')
const StringService = require('../../domain/services/StringService')

class ExampleUseCase {
  constructor(@inject(StringService) stringService) {
    this.stringService = stringService
  }

  generateRandomString(length) {
    return this.stringService.generateRandomString(length)
  }
}

module.exports = ExampleUseCase
