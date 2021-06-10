import React from 'react'
import { FormControl, Input, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function Login({ props }) {
  const { handleSubmit, register } = useForm()

  const handleLogin = (data) => {
    console.log(data)
    axios.post(process.env.REACT_APP_API_URL + '/login', data).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl'>Login Page </h1>
      <form>
        <div className='m-4 p-4 border border-shamrock-200 rounded-md'>
          <FormControl>
            <label>Username</label>
            <Input
              name='username'
              type='text'
              placeholder='username'
              {...register('username')}
            />
          </FormControl>
          <FormControl>
            <label>Password</label>
            <Input
              name='password'
              type='password'
              placeholder='password'
              {...register('password')}
            />
          </FormControl>
          <br />
          <Button onClick={handleSubmit(handleLogin)}> Login </Button>
        </div>
      </form>
    </div>
  )
}
