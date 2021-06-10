import React from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Login({ props }) {
  const { handleSubmit, register } = useForm();

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl'>Login Page </h1>
      <div className='m-4 p-4 border border-shamrock-200 rounded-md'>
        <FormControl>
          <label>Username</label>
          <Input name='username' type='text' placeholder='username' />
        </FormControl>
        <FormControl>
          <label>Password</label>
          <Input name='password' type='password' placeholder='password' />
        </FormControl>
        <br />
        <Button> Login </Button>
      </div>
    </div>
  );
}
