import React from 'react';
import { variables } from '../variables';

const Auth = () => {
  const authHandler = () => {
    window.location.href = variables.auth_href;
  };

  return (
    <div className='p-6 w-[100%] h-[100vh] grid gap-4 place-content-center'>
      <h1 className='text-center'>
        Welcome to Tweety. Please authenticate with your gmail.
      </h1>
      <button
        onClick={authHandler}
        className=' bg-blue-500 text-cyan-50 border-2 p-3 justify-self-center'
      >
        Auth with Google
      </button>
    </div>
  );
};

export default Auth;
