import Express from 'express'
import passport from 'passport'
import './Services/Login'
import userRoute from './Router/user'

const app = Express.Router()

app.post(
  '/login',
  passport.authenticate('local', { failureMessage: 'Fail Authen' }),
  (req, res) => {
    res.status(200).json({ message: 'Login Success' })
  }
)

app.use('/users', userRoute)

export default app
