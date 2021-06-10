import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='container'>
      <div className='content'>
        <h1 className='text-lg'>Homepage</h1>
        <p>หน้านี้เข้าได้โดยไม่ต้อง Login</p>
        <br />
        <Link to='/login'>
          <Button colorScheme='brand'>Go To Login</Button>
        </Link>
      </div>
    </div>
  );
}
