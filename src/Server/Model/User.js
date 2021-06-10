import Mongoose from 'mongoose'
const Schema = Mongoose.Schema

const userSchema = new Schema({
  name: String,
  tel: String,
  role: { type: String, default: 'USER' },
  password: String,
})

const userModel = Mongoose.model('User', userSchema)
export default userModel
