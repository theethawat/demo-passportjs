import UserModel from '../Model/User'
import express from 'express'

const router = express.Router()

// Retrive ALl User
router.get('/', (req, res) => {
  UserModel.find({})
    .then((value) => {
      res.status(200).json(value)
    })
    .catch((err) => {
      res.status(404, err)
    })
})

// Retrieve Selected User
router.get('/:id', (req, res) => {
  UserModel.findById(req.params.id)
    .then((value) => {
      res.status(200).json(value)
    })
    .catch((err) => {
      res.status(404, err)
    })
})

// Create New User
router.post('/', async (req, res) => {
  try {
    const insertedUser = await new UserModel(req.body)
    insertedUser.save()
    if (insertedUser) {
      res.status(201).json(insertedUser)
    } else {
      res.status(500)
    }
  } catch (error) {
    res.status(404, error)
  }
})

// Edit Selected User
router.put('/:id', (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((value) => {
      res.status(200).json({
        message: 'Success Editing',
      })
    })
    .catch((err) => {
      res.status(404, err)
    })
})

// Remove Selected User
router.delete('/:id', (req, res) => {
  UserModel.findByIdAndDelete(req.params.id)
    .then((value) => {
      res.status(200).json({
        message: 'Success Removing',
      })
    })
    .catch((err) => {
      res.status(404, err)
    })
})

export default router
