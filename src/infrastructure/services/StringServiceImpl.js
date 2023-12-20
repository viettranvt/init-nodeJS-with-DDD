// /src/infrastructure/services/StringServiceImpl.js

const { injectable } = require('inversify')
const StringService = require('../../domain/services/StringService')

@injectable()
class StringServiceImpl extends StringService {
  generateRandomString(length) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters.charAt(randomIndex)
    }
    return result
  }
}

module.exports = StringServiceImpl
