import passport from 'passport'
import { Strategy } from 'passport-local'

import UserModel from '../Model/User'

// define passport authentication

export default passport.use(
  new Strategy((username, password, callback) => {
    try {
      UserModel.findOne({ username: username }).then((value) => {
        if (value.password === password) {
          return callback(null, value)
        } else {
          return callback(null, false)
        }
      })
    } catch (error) {
      return callback(error, false)
    }
  })
)
